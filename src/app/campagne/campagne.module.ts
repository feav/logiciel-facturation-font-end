import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampagneRoutingModule } from './campagne-routing.module';
import { CampagneComponent } from './campagne.component';


@NgModule({
  declarations: [CampagneComponent],
  imports: [
    CommonModule,
    CampagneRoutingModule
  ]
})
export class CampagneModule { }
