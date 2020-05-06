import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatistiquesParBasesComponent } from './statistiques-par-bases.component';

const routes: Routes = [{ path: '', component: StatistiquesParBasesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatistiquesParBasesRoutingModule { }
