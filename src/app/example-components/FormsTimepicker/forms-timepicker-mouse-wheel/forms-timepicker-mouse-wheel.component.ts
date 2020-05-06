import { Component } from '@angular/core';

@Component({
  selector: 'app-forms-timepicker-mouse-wheel',
  templateUrl: './forms-timepicker-mouse-wheel.component.html',
})
export class FormsTimepickerMouseWheelComponent {

  allowMouseWheel = true;
  myTime = new Date();

}
