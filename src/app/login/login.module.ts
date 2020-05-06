import { NgModule } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { MessageService } from 'primeng/api';
import { LightboxModule } from 'primeng/lightbox';
import { ToastModule } from 'primeng/toast';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';


@NgModule({
    declarations: [LoginComponent],
    imports: [
        CommonModule,
        LoginRoutingModule,
        FormsModule,
        MessagesModule,
        MessageModule,
        LightboxModule,
        ToastModule,
        ReactiveFormsModule
    ],
    providers: [
        Title, MessageService
    ]
})
export class LoginModule { }
