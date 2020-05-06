import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatistiquesParCampagnesComponent } from './statistiques-par-campagnes.component';

const routes: Routes = [{ path: '', component: StatistiquesParCampagnesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatistiquesParCampagnesRoutingModule { }
