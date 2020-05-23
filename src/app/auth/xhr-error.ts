import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CookieService } from "ngx-cookie-service";

@Injectable()
export class XHRErrorHandler implements ErrorHandler {

    constructor(private injector: Injector,
                public messageService: MessageService,
                private cookieService: CookieService
                ) { }

    public showDanger(msg) {
        this.messageService.clear();
        this.messageService.add({ severity: 'error', summary: 'Authentification', detail: msg });
    }

    handleError(error) {
        const router = this.injector.get(Router);
        if (error.rejection.status === 401 || error.rejection.status === 403) {
            this.showDanger("Vous n'êtes plus autorisé à effectuer de requête.\nVeuillez vous reconnecter pour continuer !");
            localStorage.clear();
            localStorage.removeItem('gidai_session');
            this.cookieService.delete('access_token');
            this.cookieService.delete('refresh_token');
            this.cookieService.delete('token_type');
            router.navigate(['/login']);
        }
        throw error;
    }
}
