import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { MessageService } from 'primeng/api';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MessagesModule,
    MessageModule,
    ToastModule
  ],
  providers: [MessageService]
})
export class DashboardModule { }
