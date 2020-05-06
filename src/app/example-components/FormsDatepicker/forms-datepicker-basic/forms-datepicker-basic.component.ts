import {Component} from '@angular/core';

@Component({
    selector: 'app-forms-datepicker-basic',
    templateUrl: './forms-datepicker-basic.component.html',
})
export class FormsDatepickerBasicComponent {

    bsInlineValue = new Date();
    maxDate = new Date();
    bsRangeValue: Date[];
    bsValue = new Date();

    constructor() {
        this.maxDate.setDate(this.maxDate.getDate() + 7);
    }

}
