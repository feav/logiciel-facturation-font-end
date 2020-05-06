import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons-loading',
  templateUrl: './buttons-loading.component.html',
})
export class ButtonsLoadingComponent {

  isLoading: boolean = false;
  isLoadingProgessLeft: boolean | number = false;
  isLoadingProgessRight: boolean | number = false;

  Submit(){
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }

  progressClick(type){
    let Time=200;
    let loader =null;

    setTimeout(() => {
      if (type === 'left') {
        this.isLoadingProgessLeft = 0.1;
      }else{
        this.isLoadingProgessRight = 0.1;
      }
    }, Time);

    for(var i=1;i<5;i++){
      Time=Time+250;

      setTimeout(() => {
        if (type === 'left') {
          this.isLoadingProgessLeft += loader;
        }else{
          this.isLoadingProgessRight += loader;
        }
      }, Time);

      loader=i/10;

      if(i==4){
        setTimeout(() => {
          if (type === 'left') {
            this.isLoadingProgessLeft = false;
          }else{
            this.isLoadingProgessRight = false;
          }

        }, Time);
      }
    }
  }
}
