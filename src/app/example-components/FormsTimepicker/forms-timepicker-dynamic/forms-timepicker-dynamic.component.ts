import { Component } from '@angular/core';

@Component({
  selector: 'app-forms-timepicker-dynamic',
  templateUrl: './forms-timepicker-dynamic.component.html',
})
export class FormsTimepickerDynamicComponent {

  mytime: Date | undefined = new Date();
  isValid: boolean;

  update(): void {
    const time = new Date();
    time.setHours(14);
    time.setMinutes(0);

    this.mytime = time;
  }

  changed(): void {
    console.log('Time changed');
  }

  clear(): void {
    this.mytime = void 0;
  }

}
