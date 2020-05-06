import { Component } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-drag-drop-lists',
  templateUrl: './drag-drop-lists.component.html',
})
export class DragDropListsComponent {

    vamps = [
        { name: "Bad Vamp" },
        { name: "Petrovitch the Slain" },
        { name: "Bob of the Everglades" },
        { name: "The Optimistic Reaper" }
    ];

    vamps2 = [
        { name: "Dracula" },
        { name: "Kurz" },
        { name: "Vladislav" },
        { name: "Deacon" }
    ];

    constructor(private dragulaService: DragulaService) {
        // use these if you want

        this.dragulaService.createGroup("VAMPIRES", {
            // ...
        });

        this.dragulaService.dropModel("VAMPIRES").subscribe(args => {
            console.log(args);
        });
    }
}

