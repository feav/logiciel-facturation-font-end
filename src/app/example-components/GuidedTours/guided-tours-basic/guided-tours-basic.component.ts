import {Component} from '@angular/core';
import {JoyrideService} from 'ngx-joyride';

@Component({
    selector: 'app-guided-tours-basic',
    templateUrl: './guided-tours-basic.component.html',
})
export class GuidedToursBasicComponent {

    constructor(private joyride: JoyrideService) {
    }

    tour() {
        this.joyride.startTour({
            steps: ['tourStep1', 'tourStep2', 'tourStep3', 'tourStep4', 'tourStep5', 'tourStep6', 'tourStep7'],
            themeColor: '#070919'
        })
    }

}
