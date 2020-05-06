import {Component} from '@angular/core';

@Component({
    selector: 'app-notifications-sweetalerts',
    templateUrl: './notifications-sweetalerts.component.html',
})
export class NotificationsSweetalertsComponent {

    public saveEmail(email: string): void {}

    public handleRefusalToSetEmail(dismissMethod: string): void {}

}
