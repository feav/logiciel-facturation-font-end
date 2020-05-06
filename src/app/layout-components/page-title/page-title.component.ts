import {Component, Input} from '@angular/core';
import {ThemeOptions} from '../../theme-options';

@Component({
    selector: 'app-page-title',
    templateUrl: './page-title.component.html'
})
export class PageTitleComponent {
    constructor(public globals: ThemeOptions) {
    }

    @Input() titleHeading: string;
    @Input() titleDescription: string;
}
