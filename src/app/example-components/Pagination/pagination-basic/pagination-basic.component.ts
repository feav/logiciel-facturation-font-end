import { Component } from '@angular/core';

@Component({
  selector: 'app-pagination-basic',
  templateUrl: './pagination-basic.component.html',
})
export class PaginationBasicComponent {

  currentPage = 4;
  smallnumPages = 0;
  rotate = true;

}
