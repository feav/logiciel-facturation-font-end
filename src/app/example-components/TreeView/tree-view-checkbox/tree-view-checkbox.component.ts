import { Component } from '@angular/core';
import { ITreeOptions } from 'angular-tree-component';

@Component({
  selector: 'app-tree-view-checkbox',
  templateUrl: './tree-view-checkbox.component.html',
})
export class TreeViewCheckboxComponent {

    nodes = [
        {
            name: 'root1',
        },
        {
            name: 'root2',
            children: [
                { name: 'child1' },
                { name: 'child2', children: [
                    { name: 'grandchild1' },
                    { name: 'grandchild2' }
                ] }
            ]
        },
        {
            name: 'asyncroot',
            hasChildren: true
        }
    ];

    options: ITreeOptions = {
        useCheckbox: true,
        getChildren: this.getChildren.bind(this)
    };

    optionsDisabled: ITreeOptions = {
        useCheckbox: true,
        getChildren: this.getChildren.bind(this),
        useTriState: false
    };

    getChildren(node: any) {
        const newNodes = [
            {
                name: 'child1'
            }, {
                name: 'child2'
            }
        ];

        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(newNodes), 1000);
        });
    }

}
