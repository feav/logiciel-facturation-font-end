import { Component } from '@angular/core';
import {ThemeOptions} from '../../theme-options';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {

  constructor(public globals: ThemeOptions) {}

}
