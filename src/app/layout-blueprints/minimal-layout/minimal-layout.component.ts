import { Component } from '@angular/core';
import {ThemeOptions} from '../../theme-options';

@Component({
  selector: 'app-minimal-layout',
  templateUrl: './minimal-layout.component.html',
  host: {'class': 'min-vh-100'}
})
export class MinimalLayoutComponent {
  constructor(public globals: ThemeOptions) {}
}
