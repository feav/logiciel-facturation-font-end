import { Component } from '@angular/core';

@Component({
  selector: 'app-forms-datepicker-range',
  templateUrl: './forms-datepicker-range.component.html',
})
export class FormsDatepickerRangeComponent {

  bsInlineValue = new Date();
  bsInlineRangeValue: Date[];
  bsRangeValue: Date[];
  maxDate = new Date();

  constructor() {
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsInlineRangeValue = [this.bsInlineValue, this.maxDate];
  }

}
