import {Component, ViewChild} from '@angular/core';
import {ContextMenuComponent} from 'ngx-contextmenu';

@Component({
  selector: 'app-context-menus-alternate',
  templateUrl: './context-menus-alternate.component.html',
})
export class ContextMenusAlternateComponent {

  rotate = true;

  @ViewChild('contextMenuTableExample', {static: false}) public contextMenuTableExample: ContextMenuComponent;

}
