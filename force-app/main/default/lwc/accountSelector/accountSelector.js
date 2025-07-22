import { LightningElement, wire, track } from 'lwc';
import showAccountList from '@salesforce/apex/SearchAccountList.showAccountList';

export default class AccountSelector extends LightningElement {
    @track queryTerm = '';
    @track accounts = [];

    generateAccountData(event) {
        this.queryTerm = event.target.value;
    }

    @wire(showAccountList, { inputNameProvided: '$queryTerm' })
    wiredAccount({ error, data }) {
        if (data) {
            this.accounts = data;
        } else if (error) {
            console.error("Error occurred:", error);
            this.accounts = [];
        }
    }
}
