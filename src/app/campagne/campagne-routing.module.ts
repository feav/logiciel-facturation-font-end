import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampagneComponent } from './campagne.component';

const routes: Routes = [{ path: '', component: CampagneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampagneRoutingModule { }
