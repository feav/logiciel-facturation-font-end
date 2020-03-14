import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultatComponent } from './resultat.component';

const routes: Routes = [{ path: '', component: ResultatComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultatRoutingModule { }
