import {Component} from '@angular/core';

@Component({
    selector: 'app-tree-view-grid',
    templateUrl: './tree-view-grid.component.html',
})
export class TreeViewGridComponent {
    data: any[] = [
        { id: 1, name: 'Bimal', age: 60, weight: 60, gender: 1, phone: 7930343463, parent: 0},
        { id: 2, name: 'Bhagi', age: 40, weight: 90, gender: 1, phone: 7930343463, parent: 1},
        { id: 3, name: 'Kalyana', age: 36, weight: 70, gender: 1, phone: 7930343463, parent: 1},
        { id: 4, name: 'Prakash', age: 20, weight: 20, gender: 1, phone: 7930343463, parent: 2},
        { id: 5, name: 'Jitendra', age: 21, weight: 60, gender: 1, phone: 7930343463, parent: 3},
        { id: 6, name: 'Sunil', age: 60, weight: 80, gender: 1, phone: 7930343463, parent: 34},
        { id: 7, name: 'Tadit', age: 40, weight: 60, gender: 1, phone: 7930343463, parent: 6},
        { id: 8, name: 'Suraj', age: 36, weight: 60, gender: 1, phone: 7930343463, parent: 6},
        { id: 9, name: 'Swarup', age: 20, weight: 40, gender: 1, phone: 7930343463, parent: 7},
        { id: 10, name: 'Lakin', age: 21, weight: 55, gender: 1, phone: 7930343463, parent: 7},
    ];

    configs: any = {
        id_field: 'id',
        parent_id_field: 'parent',
        parent_display_field: 'name',
        filter: true,
        css: { // Optional
            expand_class: 'ion-md-arrow-dropright',
            collapse_class: 'ion-md-arrow-dropdown',
        },
        columns: [
            {
                name: 'name',
                header: 'Name',
                editable: true
            },
            {
                name: 'age',
                header: 'Age',
                editable: true,
                renderer: function(value) {
                    return value + ' years';
                }
            },
            {
                name: 'weight',
                header: 'Weight',
                filterFunction: function(row_data, column, column_value, filter_value) {
                    return column_value > filter_value;
                }
            },
            {
                name: 'gender',
                header: 'Gender',
                renderer: function(value) {
                    return value ? 'Male' : 'Female';
                }
            },
            {
                name: 'phone',
                header: 'Phone'
            }
        ]
    };
}
