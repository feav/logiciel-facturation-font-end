import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-example-wrapper-seamless',
  templateUrl: './example-wrapper-seamless.component.html'
})
export class ExampleWrapperSeamlessComponent {
  @Input() sectionHeading: string;
  @Input() sectionDescription: string;
}
