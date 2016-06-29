import {Component, Input, OnInit} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-customer',
    templateUrl: 'customer.component.html',
    styleUrls: ['customer.component.css'],
    directives: []
})

export class CustomerComponent implements OnInit {
    @Input() customer: {id: number, name: string};
    customerColor: string = 'teal';

    constructor() {
        console.log('constructor');
    }

    ngOnInit():void {
        console.log('ngOnInit');
    }
}