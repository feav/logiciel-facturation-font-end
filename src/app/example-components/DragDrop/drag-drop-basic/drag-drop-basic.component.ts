import { Component } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-drag-drop-basic',
  templateUrl: './drag-drop-basic.component.html',
})
export class DragDropBasicComponent {

    public constructor(private dragulaService: DragulaService) {
        dragulaService.createGroup("SPILL", {
            removeOnSpill: true
        });
    }

}
