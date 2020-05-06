import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications-alerts-dismissible',
  templateUrl: './notifications-alerts-dismissible.component.html',
})
export class NotificationsAlertsDismissibleComponent {

  dismissible = true;
  defaultAlerts: any[] = [
    {
      type: 'success',
      msg: 'You successfully read this important alert message.'
    },
    {
      type: 'info',
      msg: 'This alert needs your attention, but it\'s not super important.'
    },
    {
      type: 'danger',
      msg: 'Better check yourself, you\'re not looking too good.'
    },
    {
      type: 'warning',
      msg: 'This is a warning type alert that is dismissible.'
    }
  ];
  alerts = this.defaultAlerts;

  reset(): void {
    this.alerts = this.defaultAlerts;
  }

  onClosed(dismissedAlert: any): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }

}
