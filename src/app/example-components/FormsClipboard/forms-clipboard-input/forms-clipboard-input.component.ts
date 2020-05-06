import { Component } from '@angular/core';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-forms-clipboard-input',
  templateUrl: './forms-clipboard-input.component.html',
})
export class FormsClipboardInputComponent {

  private notifier: NotifierService;

  public constructor( notifier: NotifierService ) {
    this.notifier = notifier;
  }

  public showNotification( type: string, message: string ): void {
    this.notifier.notify( type, message );
  }
}
