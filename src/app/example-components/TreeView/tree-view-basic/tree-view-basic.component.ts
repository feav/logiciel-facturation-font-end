import {Component} from '@angular/core';

@Component({
    selector: 'app-tree-view-basic',
    templateUrl: './tree-view-basic.component.html',
})
export class TreeViewBasicComponent {

    nodes = [
        {
            name: 'North America',
            children: [
                { name: 'United States', children: [
                        {name: 'New York'},
                        {name: 'California'},
                        {name: 'Florida'}
                    ] },
                { name: 'Canada' }
            ]
        },
        {
            name: 'South America',
            children: [
                { name: 'Argentina', children: [] },
                { name: 'Brazil' }
            ]
        },
        {
            name: 'Europe',
            children: [
                { name: 'England' },
                { name: 'Germany' },
                { name: 'France' },
                { name: 'Italy' },
                { name: 'Spain' }
            ]
        }
    ];
    options = {};
}
