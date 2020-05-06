import {Component, TemplateRef } from '@angular/core';
import {BsModalService, BsModalRef} from 'ngx-bootstrap/modal';

@Component({
    selector: 'app-modals-confirmation',
    templateUrl: './modals-confirmation.component.html',
})
export class ModalsConfirmationComponent {
    modalRef: BsModalRef;
    message: string = 'Click one of the buttons inside the confirmation modals to see the event change here.';

    constructor(private modalService: BsModalService) {
    }

    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template, {class: 'modal-dialog-centered'});
    }

    confirm(): void {
        this.message = 'You clicked the \'confirm\' action!';
        this.modalRef.hide();
    }

    decline(): void {
        this.message = 'You clicked the \'decline\' action!';
        this.modalRef.hide();
    }
}
