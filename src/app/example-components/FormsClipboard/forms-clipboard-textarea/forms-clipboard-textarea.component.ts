import { Component } from '@angular/core';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-forms-clipboard-textarea',
  templateUrl: './forms-clipboard-textarea.component.html',
})
export class FormsClipboardTextareaComponent {

  private notifier: NotifierService;

  public constructor( notifier: NotifierService ) {
    this.notifier = notifier;
  }

  public showNotification( type: string, message: string ): void {
    this.notifier.notify( type, message );
  }
}
