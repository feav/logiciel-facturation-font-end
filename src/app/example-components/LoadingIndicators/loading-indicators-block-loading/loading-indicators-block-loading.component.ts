import {Component} from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
    selector: 'app-loading-indicators-block-loading',
    templateUrl: './loading-indicators-block-loading.component.html',
})
export class LoadingIndicatorsBlockLoadingComponent {

    sp1 = 'sp1';
    sp2 = 'sp2';
    sp3 = 'sp3';
    sp4 = 'sp4';
    sp5 = 'sp5';
    sp6 = 'sp6';

    constructor(private spinner: NgxSpinnerService) {
    }

    showSpinner(name: string) {
        this.spinner.show(name);
    }

    hideSpinner(name: string) {
        this.spinner.hide(name);
    }

}
