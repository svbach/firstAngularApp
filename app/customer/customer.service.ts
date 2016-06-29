import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';

const URL_CUSTOMER = 'app/customers.json';

@Injectable()

export class CustomerService implements OnInit {

    customers = [
        {id: 1, name: 'Ward'},
        {id: 2, name: 'Kevin'},
        {id: 3, name: 'Eric'},
        {id: 4, name: 'Sally'},
        {id: 5, name: 'Emmet'},
    ];

    constructor(private _http: Http) { }

    getCustomers() {
        return this._http.get(URL_CUSTOMER)
            .map((response: Response) => response.json())
            .toPromise()
            .catch((err: any) => {
                console.log(err);
                return Promise.reject(err);
            });
    }

    getCustomers_RxObserable() {
        return this._http.get(URL_CUSTOMER)
            .map((response: Response) => response.json())
            .catch(this._handleError);
    }

    _handleError(err: any) {
        console.log(err);

        throw err;

        return Observable

    }
}
