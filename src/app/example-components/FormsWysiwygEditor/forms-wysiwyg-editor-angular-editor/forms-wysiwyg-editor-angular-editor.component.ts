import { Component } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-forms-wysiwyg-editor-angular-editor',
  templateUrl: './forms-wysiwyg-editor-angular-editor.component.html',
})
export class FormsWysiwygEditorAngularEditorComponent {

  htmlContent = '';

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultFontName: 'Arial',
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };

}
