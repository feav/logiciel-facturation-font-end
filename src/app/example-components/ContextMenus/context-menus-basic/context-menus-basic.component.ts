import {Component, ViewChild} from '@angular/core';
import {ContextMenuComponent} from 'ngx-contextmenu';

@Component({
    selector: 'app-context-menus-basic',
    templateUrl: './context-menus-basic.component.html',
})
export class ContextMenusBasicComponent {

    @ViewChild('contextMenuExample1', {static: false}) public contextMenuExample1: ContextMenuComponent;
    @ViewChild('contextMenuExample2', {static: false}) public contextMenuExample2: ContextMenuComponent;
    @ViewChild('contextMenuExample3', {static: false}) public contextMenuExample3: ContextMenuComponent;
    @ViewChild('contextMenuExample4', {static: false}) public contextMenuExample4: ContextMenuComponent;

}
