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

import { RouteurRoutingModule } from './routeur-routing.module';
import { RouteurComponent } from './routeur.component';


@NgModule({
    declarations: [RouteurComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        RouteurRoutingModule,
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
        ContextMenuModule
    ],
    providers: [MessageService]
})
export class RouteurModule { }
