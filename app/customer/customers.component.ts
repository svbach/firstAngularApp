import { Component, OnInit } from '@angular/core';
import { CustomerComponent } from './customer.component';
import { CustomerService } from './customer.service';
// import { Observable } from 'rxjs/Rx';

@Component({
    moduleId: module.id,
    selector: 'app-customers',
    templateUrl: 'customers.component.html',
    styleUrls: ['customers.component.css'],
    directives: [CustomerComponent]
})

export class CustomersComponent implements OnInit {
    customers: any[];
    // customers: Promise<any[]>;
    // customers: Observable<any[]>;

    constructor(private _customerService: CustomerService) {
    }

    ngOnInit():void {

        // Rx Observable version with subscribe
        this._customerService.getCustomers_RxObserable()
            .subscribe(
                (customers) => this.customers = customers,
                (err) => {console.log(err);}
            );

        // Straighty up promise to array
        // this._customerService.getCustomers()
        //     .then((customers) => this.customers = customers)
        //     .catch((err) => {
        //         console.log(err);
        //     });

        // Promise<any[]>
        // this.customers = this._customerService.getCustomers()
        //     .catch((err) => {
        //         console.log(err);
        //     });

    }
}