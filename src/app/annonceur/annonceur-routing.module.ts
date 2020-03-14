import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnnonceurComponent } from './annonceur.component';

const routes: Routes = [{ path: '', component: AnnonceurComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnnonceurRoutingModule { }
