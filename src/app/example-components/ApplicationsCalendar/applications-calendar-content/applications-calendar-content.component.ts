import {Component} from '@angular/core';

@Component({
    selector: 'app-applications-calendar-content',
    templateUrl: './applications-calendar-content.component.html'
})
export class ApplicationsCalendarContentComponent {

    toggleMobileSidebar: boolean = false;

    bsInlineValue = new Date();
    bsInlineRangeValue: Date[];
    maxDate = new Date();

    constructor() {
        this.maxDate.setDate(this.maxDate.getDate() + 7);
        this.bsInlineRangeValue = [this.bsInlineValue, this.maxDate];
    }

}
