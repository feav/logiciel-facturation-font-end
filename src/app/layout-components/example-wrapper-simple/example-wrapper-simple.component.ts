import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-example-wrapper-simple',
  templateUrl: './example-wrapper-simple.component.html'
})
export class ExampleWrapperSimpleComponent {
  @Input() sectionHeading: string;
  @Input() sectionDescription: string;
}
