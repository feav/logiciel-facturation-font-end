import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-example-wrapper-container',
  templateUrl: './example-wrapper-container.component.html'
})
export class ExampleWrapperContainerComponent {
  @Input() sectionHeading: string;
  @Input() sectionDescription: string;
}
