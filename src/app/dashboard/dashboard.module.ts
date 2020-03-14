import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CardModule} from 'primeng/card';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CardModule
  ]
})
export class DashboardModule { }
