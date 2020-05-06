import { Component } from '@angular/core';
import {ThemeOptions} from '../../theme-options';

@Component({
  selector: 'app-sidebar-header',
  templateUrl: './sidebar-header.component.html'
})
export class SidebarHeaderComponent {

  constructor(public globals: ThemeOptions) {}
  toggleSidebarCollapse() {
    this.globals.toggleSidebar = !this.globals.toggleSidebar;
  }
  toggleSidebarMobileOpen() {
    this.globals.toggleSidebarMobile = !this.globals.toggleSidebarMobile;
    this.globals.toggleSidebar = false;
  }

}
