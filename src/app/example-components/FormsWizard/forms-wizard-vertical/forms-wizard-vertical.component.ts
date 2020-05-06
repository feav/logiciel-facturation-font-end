import { Component } from '@angular/core';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-forms-wizard-vertical',
  templateUrl: './forms-wizard-vertical.component.html',
})
export class FormsWizardVerticalComponent {

  private notifier: NotifierService;

  public constructor( notifier: NotifierService ) {
    this.notifier = notifier;
  }

  public finishWizard( type: string, message: string ): void {
    this.notifier.notify( type, message );
  }

}
