import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatistiquesParAnnonceursComponent } from './statistiques-par-annonceurs.component';

const routes: Routes = [{ path: '', component: StatistiquesParAnnonceursComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatistiquesParAnnonceursRoutingModule { }
