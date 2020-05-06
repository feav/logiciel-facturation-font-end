import {Component} from '@angular/core';

@Component({
    selector: 'app-pagination-dynamic',
    templateUrl: './pagination-dynamic.component.html',
})
export class PaginationDynamicComponent {

    p = 3;

    collection = [];
    constructor() {
        for (let i = 1; i <= 50; i++) {
            this.collection.push('List item example: #' + i);
        }
    }
}
