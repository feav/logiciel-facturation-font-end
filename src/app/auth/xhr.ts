import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';
import { CookieService } from "ngx-cookie-service";

@Injectable()
export class XhrInterceptor implements HttpInterceptor {

    constructor(private cookieService: CookieService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const accessToken = this.cookieService.get('access_token');
        const tokenType = this.cookieService.get('token_type');
        const xhr = req.clone({
            headers: new HttpHeaders({
                'Accept':  'application/json',
                'Authorization': `${tokenType} ${accessToken}`
            })
        });
        return next.handle(xhr);
    }

}
