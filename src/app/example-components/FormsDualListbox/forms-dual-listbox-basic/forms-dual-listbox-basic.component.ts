import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-forms-dual-listbox-basic',
  templateUrl: './forms-dual-listbox-basic.component.html',
  encapsulation:ViewEncapsulation.Emulated
})
export class FormsDualListboxBasicComponent {
    confirmed:Array<string> = [
    'Harrow & Wealdstone',
    'Kenton',
    'South Kenton',
    'Harlesden',
    'Willesden Junction',
    'Kensal Green'
  ];

  tube:Array<string> = [
    'North Wembley',
    'Wembley Central',
    'Stonebridge Park',

    "Queen's Park",
    'Kilburn Park',
    'Maida Vale',
    'Warwick Avenue',
    'Paddington',
    'Edgware Road',
    'Marylebone',
    'Baker Street',
    "Regent's Park",
    'Oxford Circus',
    'Piccadilly Circus',
    'Charing Cross',
    'Embankment',
    'Waterloo',
    'Lambeth North',
    'Elephant & Castle'
  ];
}
