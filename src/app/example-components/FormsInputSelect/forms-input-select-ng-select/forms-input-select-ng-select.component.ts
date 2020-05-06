import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms-input-select-ng-select',
  templateUrl: './forms-input-select-ng-select.component.html',
})
export class FormsInputSelectNgSelectComponent implements OnInit {

  selectedSimpleItem = 'Karyn Wright';
  simpleItems = [];

  ngOnInit() {
    this.simpleItems = [
        'Karyn Wright',
        'Rochelle Estes',
        'Mendoza Ruiz',
        'Rosales Russell',
        'Marquez Nolan',
        'Franklin James',
        'Elsa Bradley',
        'Pearson Thompson',
        'Ina Pugh',
        'Nguyen Elliott',
        'Mills Barnett',
        'Margaret Reynolds',
        'Yvette Navarro',
        'Elisa Guzman',
        'Jodie Bowman',
        'Diann Booker'
    ];
  }

}
