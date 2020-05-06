import { Component } from '@angular/core';
import {ThemeOptions} from '../../theme-options';

@Component({
  selector: 'app-header-drawer',
  templateUrl: './header-drawer.component.html'
})
export class HeaderDrawerComponent {
    constructor(public globals: ThemeOptions) {}

    toggleHeaderDrawerOpen() {
        this.globals.toggleHeaderDrawer = !this.globals.toggleHeaderDrawer;
    }
}
