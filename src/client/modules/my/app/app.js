import { LightningElement } from 'lwc';
import _ from 'lodash';

export default class App extends LightningElement
{
    success = false;
    isSet = false;

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
            console.log(_.orderBy(data.sObjects,'count', 'desc'));
            
        });
    }
}
