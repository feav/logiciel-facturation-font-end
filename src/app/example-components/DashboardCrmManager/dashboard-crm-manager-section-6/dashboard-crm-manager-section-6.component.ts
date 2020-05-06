import { Component } from '@angular/core';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-dashboard-crm-manager-section-6',
  templateUrl: './dashboard-crm-manager-section-6.component.html',
})
export class DashboardCrmManagerSection6Component {

  private notifier: NotifierService;

  public constructor( notifier: NotifierService ) {
    this.notifier = notifier;
  }

  public finishWizard( type: string, message: string ): void {
    this.notifier.notify( type, message );
  }


}
