import { Component } from '@angular/core';

@Component({
  selector: 'app-calendars-inline',
  templateUrl: './calendars-inline.component.html',
})
export class CalendarsInlineComponent {

    bsInlineValue = new Date();
    bsInlineRangeValue: Date[];
    maxDate = new Date();

    constructor() {
        this.maxDate.setDate(this.maxDate.getDate() + 7);
        this.bsInlineRangeValue = [this.bsInlineValue, this.maxDate];
    }
}
