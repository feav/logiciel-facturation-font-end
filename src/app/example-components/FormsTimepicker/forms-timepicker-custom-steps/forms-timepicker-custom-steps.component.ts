import { Component } from '@angular/core';

@Component({
  selector: 'app-forms-timepicker-custom-steps',
  templateUrl: './forms-timepicker-custom-steps.component.html',
})
export class FormsTimepickerCustomStepsComponent {

  hstep = 1;
  mstep = 15;
  sstep = 10;

  mytime: Date = new Date();
  options: any = {
    hstep: [1, 2, 3],
    mstep: [1, 5, 10, 15, 25, 30],
    sstep: [5, 10, 20, 30]
  };
}
