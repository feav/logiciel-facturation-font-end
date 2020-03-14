import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RouteurComponent } from './routeur.component';

const routes: Routes = [{ path: '', component: RouteurComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouteurRoutingModule { }
