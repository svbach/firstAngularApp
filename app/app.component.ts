import {Component} from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import {CustomersComponent} from './customer/customers.component';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives: [CustomersComponent],
    providers: [ HTTP_PROVIDERS ]
})
export class AppComponent {
    // [ ] means property binding - Component to Dom
    // ( ) means event binding - Dom to Component

    title: string = 'Customer App';
    name: string = 'Bach';
    bachsColor: string = 'orange';

    constructor() {

    }
    
    handleButtonClick(): void {
        console.log('this.bachsColor=', this.bachsColor);
        this.bachsColor = ('red' === this.bachsColor) ? 'orange' : 'red';
        console.log('this.bachsColor=', this.bachsColor);
    }

    handleKeyUp(event: any): void {
        this.name = event.target.value;
    }
    
}

