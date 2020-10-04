import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { LoginService } from './service/login.service';
import { CookieService } from "ngx-cookie-service";
import * as moment from 'moment';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    host: { 'class': 'w-100 d-flex align-items-center' }
})
export class LoginComponent implements OnInit {

    userCredentialsFormGroup: FormGroup;
    showLoader: Boolean = false;

    constructor(private formBuilder: FormBuilder,
                private router: Router,
                private loginService: LoginService,
                private messageService: MessageService,
                private cookieService: CookieService,
                private titleService: Title) { }

    ngOnInit() {
        this.userCredentialsFormGroup = this.formBuilder.group({
            'email': new FormControl('admin@admin.com', Validators.required),
            'password': new FormControl('r007@dm1n', Validators.required),
            'remember_me': new FormControl(false)
        });
        this.titleService.setTitle("Page de Connexion à GIDAI");
    }

    loginUser(credentials){
        this.showLoader = true;
        this.loginService
            .login(credentials)
            .subscribe(
                (resp:any) => {
                    // console.log(resp.user)
                    if(resp.code == 200){
                        localStorage.setItem("gidai_user_profile", btoa(JSON.stringify(resp.user)));
                        this.cookieService.set('access_token', resp.tokens.access_token, new Date( (new Date()).getTime() + resp.tokens.expires_in*1000 ));
                        this.cookieService.set('refresh_token', resp.tokens.refresh_token, new Date( (new Date()).getTime() + resp.tokens.expires_in*1000 ));
                        this.cookieService.set('token_type', resp.tokens.token_type, new Date( (new Date()).getTime() + resp.tokens.expires_in*1000 ));
                        this.router.navigate(['/']);
                    }else if(resp.code == 401)
                        this.messageService.add({severity:'error', summary:'Connexion', detail:"L'e-mail et le mot de passe ne correspondent pas !"});
                    else
                        this.messageService.add({severity:'error', summary:'Connexion', detail:"Vous n'êtes pas autorisé à vous connecter !"});
                    this.showLoader = false;
                },
                (error) => { 
                    this.showLoader = false;
                    this.messageService.add({severity:'error', summary:'Connexion', detail:"Une erreur est survenue durant la tentative de connexion !"});
                }
            );
    }

    getButtonType(){
        this.showLoader ? 'button' : 'submit'
    }

}
