import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatistiquesParRouteursComponent } from './statistiques-par-routeurs.component';

const routes: Routes = [{ path: '', component: StatistiquesParRouteursComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatistiquesParRouteursRoutingModule { }
