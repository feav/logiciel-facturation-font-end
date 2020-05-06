import { Component } from '@angular/core';

@Component({
  selector: 'app-scrollable-infinite-scroll',
  templateUrl: './scrollable-infinite-scroll.component.html',
})
export class ScrollableInfiniteScrollComponent {

  array = [];
  sum = 20;
  throttle = 200;
  scrollDistance = 1;
  scrollUpDistance = 1;
  direction = '';
  modalOpen = false;

  constructor() {
    this.appendItems(0, this.sum);
  }

  addItems(startIndex, endIndex, _method) {
    for (let i = 0; i < this.sum; ++i) {
      this.array[_method](['List item: #', i].join(''));
    }
  }

  appendItems(startIndex, endIndex) {
    this.addItems(startIndex, endIndex, 'push');
  }

  prependItems(startIndex, endIndex) {
    this.addItems(startIndex, endIndex, 'unshift');
  }

  onScrollDown () {
    // add another 20 items
    const start = this.sum;
    this.sum += 20;
    this.appendItems(start, this.sum);

    this.direction = 'down'
  }

  onUp() {
    const start = this.sum;
    this.sum += 20;
    this.prependItems(start, this.sum);

    this.direction = 'up';
  }
}
