import { LightningElement } from 'lwc';

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
}
