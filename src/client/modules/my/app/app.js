import { LightningElement, track } from 'lwc';
import _ from 'lodash';

export default class App extends LightningElement
{
    success = false;
    isSet = false;
    columns = [
        { label: 'sObject API Name', fieldName: 'name' },
        { label: 'Count', fieldName: 'count' },
    ];
    @track data = [];

    connectedCallback()
    {
        var searchParams = new URLSearchParams(window.location.search);

        if(searchParams != null && searchParams.has('success'))
        {
            this.isSet = true;
            this.success = searchParams.get('success') === 'true';
        }
    }

    handleClick(evt)
    {
        fetch('/getcounts')
        .then(response => response.json())
        .then(data =>{
            data = _.orderBy(data.sObjects,'count', 'desc');
            console.log(data);            
        });
    }
}
