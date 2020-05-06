import { Component } from '@angular/core';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-forms-wizard-integration-two',
  templateUrl: './forms-wizard-integration-two.component.html',
})
export class FormsWizardIntegrationTwoComponent {

  private notifier: NotifierService;

  public constructor( notifier: NotifierService ) {
    this.notifier = notifier;
  }

  public finishWizard( type: string, message: string ): void {
    this.notifier.notify( type, message );
  }

}
