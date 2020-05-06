import { Component } from '@angular/core';

@Component({
  selector: 'app-cards6-examples-37',
  templateUrl: './cards6-examples-37.component.html'
})
export class Cards6Examples37Component {

    isLoading: boolean = false;

    Submit(){
        this.isLoading = true;
        setTimeout(() => {
            this.isLoading = false;
        }, 1000);
    }
}
