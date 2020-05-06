import { Component } from '@angular/core';
import {ThemeOptions} from '../../theme-options';

@Component({
  selector: 'app-collapsed-sidebar',
  templateUrl: './collapsed-sidebar.component.html'
})
export class CollapsedSidebarComponent {
  constructor(public globals: ThemeOptions) {}
}
