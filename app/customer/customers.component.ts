import { Component, OnInit } from '@angular/core';
import { CustomerComponent } from './customer.component';
import { CustomerService } from './customer.service';
import { Observable } from 'rxjs/Rx';

@Component({
    moduleId: module.id,
    selector: 'app-customers',
    templateUrl: 'customers.component.html',
    styleUrls: ['customers.component.css'],
    directives: [CustomerComponent],
    providers: [CustomerService]
})

export class CustomersComponent implements OnInit {
    customers: Observable<any[]>;

    constructor(private _customerService: CustomerService) {
    }

    ngOnInit():void {
        this.customers = this._customerService.getCustomers()
            .catch((err) => {
                console.log(err);
                return Observable.of(true);
            });
    }
}