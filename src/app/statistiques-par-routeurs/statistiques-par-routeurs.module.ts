import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { MessageService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { KeyFilterModule } from 'primeng/keyfilter';
import { DropdownModule } from 'primeng/dropdown';
import { PanelModule } from 'primeng/panel';
import { CalendarModule } from 'primeng/calendar';
import { PaginatorModule } from 'primeng/paginator';
import { ToastModule } from 'primeng/toast';

import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';

import { StatistiquesParRouteursRoutingModule } from './statistiques-par-routeurs-routing.module';
import { StatistiquesParRouteursComponent } from './statistiques-par-routeurs.component';


@NgModule({
    declarations: [StatistiquesParRouteursComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        StatistiquesParRouteursRoutingModule,
        SelectButtonModule,
        TableModule,
        ButtonModule,
        SplitButtonModule,
        MessagesModule,
        MessageModule,
        DialogModule,
        InputTextModule,
        KeyFilterModule,
        DropdownModule,
        PanelModule,
        CalendarModule,
        PaginatorModule,
        ToastModule,
        NgxDaterangepickerMd.forRoot()
    ],
    providers: [MessageService]
})
export class StatistiquesParRouteursModule { }
