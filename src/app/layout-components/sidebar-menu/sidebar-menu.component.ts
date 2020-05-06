import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';
import { SidebarMenuService } from './sidebar-menu.service';
import {ThemeOptions} from '../../theme-options';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  animations: [
    trigger('slide', [
      state('up', style({ height: 0, opacity: '0' })),
      state('down', style({ height: '*', opacity: '1' })),
      transition('up <=> down', animate(200))
    ])
  ]
})
export class SidebarMenuComponent implements OnInit {
  menus = [];
  constructor(
      public globals: ThemeOptions,
      private sidebarMenuService: SidebarMenuService,
      private router: Router
  ) {
    this.menus = [ ...sidebarMenuService.getMenuList() ];
  }

  private innerWidth: number;

  ngOnInit() {
    const theActiveMenu = this.sidebarMenuService.getMenuItemByUrl(this.menus, this.router.url);
    if (theActiveMenu) {
      this.toggle(theActiveMenu);
    }

    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

  toggleSidebarMobileOpen() {
    if (this.innerWidth < 992) {
      this.globals.toggleSidebarMobile = !this.globals.toggleSidebarMobile;
      this.globals.toggleSidebar = false;
    }
  }

  toggle(currentMenu) {
    this.menus = this.sidebarMenuService.toggleMenuItem(this.menus, currentMenu);
  }

  getState(currentMenu) {

    if (currentMenu.active) {
      return 'down';
    } else {
      return 'up';
    }
  }

}
