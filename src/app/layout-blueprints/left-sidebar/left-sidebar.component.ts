import { Component } from '@angular/core';
import {ThemeOptions} from '../../theme-options';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html'
})
export class LeftSidebarComponent {
  constructor(public globals: ThemeOptions) {}
}
