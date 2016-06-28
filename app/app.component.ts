import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent {
    // [ ] means property binding - Component to Dom
    // ( ) means event binding - Dom to Component

    title: string = 'Customer App';
    name: string = 'Bach';
    bachsColor: string = 'orange';
    
    handleButtonClick(): void {
        console.log('this.bachsColor=', this.bachsColor);
        this.bachsColor = ('red' === this.bachsColor) ? 'orange' : 'red';
        console.log('this.bachsColor=', this.bachsColor);
    }
    
}

