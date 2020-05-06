import { Component } from '@angular/core';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-forms-wizard-integration-one',
  templateUrl: './forms-wizard-integration-one.component.html',
})
export class FormsWizardIntegrationOneComponent {

  private notifier: NotifierService;

  public constructor( notifier: NotifierService ) {
    this.notifier = notifier;
  }

  public finishWizard( type: string, message: string ): void {
    this.notifier.notify( type, message );
  }

}
