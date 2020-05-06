import {Component} from '@angular/core';

@Component({
    selector: 'app-forms-input-mask-basic',
    templateUrl: './forms-input-mask-basic.component.html',
})
export class FormsInputMaskBasicComponent {

    public myModel: string;
    public modelWithValue: string;

    public mask: Array<string | RegExp>;
    public maskUSPhone: Array<string | RegExp>;
    public maskDate: Array<string | RegExp>;
    public maskCreditCard: Array<string | RegExp>;

    constructor() {
        this.mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

        this.maskUSPhone = ['+', '1', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

        this.maskDate = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];

        this.maskCreditCard = [/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/];

        this.modelWithValue = '5554441234'
    }

}
