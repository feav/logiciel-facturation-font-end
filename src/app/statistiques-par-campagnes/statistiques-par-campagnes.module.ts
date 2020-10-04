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
import { ContextMenuModule } from 'primeng/contextmenu';
import { TreeTableModule } from 'primeng/treetable';

import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';

import { StatistiquesParCampagnesRoutingModule } from './statistiques-par-campagnes-routing.module';
import { StatistiquesParCampagnesComponent } from './statistiques-par-campagnes.component';


@NgModule({
    declarations: [StatistiquesParCampagnesComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        StatistiquesParCampagnesRoutingModule,
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
        ContextMenuModule,
        NgxDaterangepickerMd.forRoot(),
        TreeTableModule
    ],
    providers: [MessageService]
})
export class StatistiquesParCampagnesModule { }
