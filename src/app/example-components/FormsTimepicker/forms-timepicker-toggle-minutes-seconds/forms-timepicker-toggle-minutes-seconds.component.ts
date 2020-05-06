import { Component } from '@angular/core';

@Component({
  selector: 'app-forms-timepicker-toggle-minutes-seconds',
  templateUrl: './forms-timepicker-toggle-minutes-seconds.component.html',
})
export class FormsTimepickerToggleMinutesSecondsComponent {

  myTime: Date = new Date();
  showMin: boolean = true;
  showSec: boolean = true;

  toggleMinutes(): void {
    this.showMin = !this.showMin;
  }

  toggleSeconds(): void {
    this.showSec = !this.showSec;
  }

}
