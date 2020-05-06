import { Component } from '@angular/core';
import {ThemeOptions} from '../../theme-options';

@Component({
  selector: 'app-presentation-layout',
  templateUrl: './presentation-layout.component.html'
})
export class PresentationLayoutComponent {
  constructor(public globals: ThemeOptions) {}
}
