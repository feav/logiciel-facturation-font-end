import {Component} from '@angular/core';

@Component({
    selector: 'app-forms-colorpicker-permanent',
    templateUrl: './forms-colorpicker-permanent.component.html',
})
export class FormsColorpickerPermanentComponent {

    public selectedColor: string = 'color1';


    public arrayColors: any = {
        color1: '#4191ff',
        color2: '#f83245'
    };

}
