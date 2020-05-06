import { Component, ViewChild } from '@angular/core';
import { NotifierService } from 'angular-notifier';

import { DropzoneComponent , DropzoneDirective,
  DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

@Component({
  selector: 'app-forms-upload-dropzone',
  templateUrl: './forms-upload-dropzone.component.html',
})
export class FormsUploadDropzoneComponent {

  private notifier: NotifierService;

  public constructor( notifier: NotifierService ) {
    this.notifier = notifier;
  }

  public type: string = 'component';

  public disabled: boolean = false;

  public config: DropzoneConfigInterface = {
    clickable: true,
    maxFiles: 1,
    autoReset: null,
    errorReset: null,
    cancelReset: null
  };

  @ViewChild(DropzoneComponent, { static: false }) componentRef?: DropzoneComponent;
  @ViewChild(DropzoneDirective, { static: false }) directiveRef?: DropzoneDirective;

  public toggleType(): void {
    this.type = (this.type === 'component') ? 'directive' : 'component';
    this.notifier.notify( 'info', 'Dropzone type changed!' );

  }

  public toggleDisabled(): void {
    this.disabled = !this.disabled;
    this.notifier.notify( 'warning', 'Dropzone disabled state toggled!' );

  }

  public toggleAutoReset(): void {
    this.config.autoReset = this.config.autoReset ? null : 5000;
    this.config.errorReset = this.config.errorReset ? null : 5000;
    this.config.cancelReset = this.config.cancelReset ? null : 5000;
  }

  public toggleMultiUpload(): void {
    this.config.maxFiles = this.config.maxFiles ? 0 : 1;
  }

  public toggleClickAction(): void {
    this.config.clickable = !this.config.clickable;

  }

  public resetDropzoneUploads(): void {
    if (this.type === 'directive' && this.directiveRef) {
      this.directiveRef.reset();
    } else if (this.type === 'component' && this.componentRef && this.componentRef.directiveRef) {
      this.componentRef.directiveRef.reset();
    }

    this.notifier.notify( 'info', 'Dropzone has been reset!' );

  }

  public onUploadInit(): void {
     this.notifier.notify( 'first', 'Dropzone triggered onUploadInit!' );
  }

  public onUploadError(): void {
     this.notifier.notify( 'error', 'Dropzone triggered onUploadError!' );
  }

  public onUploadSuccess(): void {
     this.notifier.notify( 'success', 'Dropzone triggered onUploadSuccess!' );
  }
}
