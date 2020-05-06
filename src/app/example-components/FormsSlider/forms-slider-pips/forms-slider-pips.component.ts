import { Component } from '@angular/core';

@Component({
  selector: 'app-forms-slider-pips',
  templateUrl: './forms-slider-pips.component.html',
})
export class FormsSliderPipsComponent {

  someRange2 = [3.82, 13.58];

  someRange2config: any = {
    behaviour: 'drag',
    connect: true,
    margin: 1,
    limit: 5, // NOTE: overwritten by [limit]="10"
    range: {
      min: 0,
      max: 20
    },
    pips: {
      mode: 'steps',
      density: 5
    }
  };
}
