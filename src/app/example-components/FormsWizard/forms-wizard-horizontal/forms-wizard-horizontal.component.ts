import { Component } from '@angular/core';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-forms-wizard-horizontal',
  templateUrl: './forms-wizard-horizontal.component.html',
})
export class FormsWizardHorizontalComponent {

  private notifier: NotifierService;

  public constructor( notifier: NotifierService ) {
    this.notifier = notifier;
  }

  public finishWizard( type: string, message: string ): void {
    this.notifier.notify( type, message );
  }

}
