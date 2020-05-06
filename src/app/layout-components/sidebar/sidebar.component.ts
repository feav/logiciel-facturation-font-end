import { Component } from '@angular/core';
import {ThemeOptions} from '../../theme-options';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

  constructor(public globals: ThemeOptions) {}

  toggleSidebarMobileOpen() {
    this.globals.toggleSidebarMobile = !this.globals.toggleSidebarMobile;
    this.globals.toggleSidebar = false;
  }

}
