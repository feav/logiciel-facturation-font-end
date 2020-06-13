import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders, 
        HttpEvent, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { MessageService } from 'primeng/api';
import { CookieService } from "ngx-cookie-service";

@Injectable()
export class XHRInterceptor implements HttpInterceptor {

    constructor(private cookieService: CookieService,
                private messageService: MessageService,
                private router: Router
            ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const accessToken = this.cookieService.get('access_token');
        const tokenType = this.cookieService.get('token_type');
        const xhr = req.clone({
            headers: new HttpHeaders({
                'Accept':  'application/json',
                'Authorization': `${tokenType} ${accessToken}`
            })
        });
        return next.handle(xhr).pipe(
            tap(evt => {}),
            catchError( (err: any) => {
                if(err instanceof HttpErrorResponse && err.status==401){
                    localStorage.removeItem('gidai_user_profile');
                    localStorage.clear();
                    this.cookieService.delete('access_token');
                    this.cookieService.delete('refresh_token');
                    this.cookieService.delete('token_type');
                    this.router.navigate(['/login']);
                    this.messageService.add({ 
                        severity: 'error',
                        summary: 'Authentification',
                        detail: "Vous n'êtes plus autorisé à effectuer de requête.\nVeuillez vous reconnecter pour continuer !"
                    });
                }
                return of(err);
            })
        );
    }

}
