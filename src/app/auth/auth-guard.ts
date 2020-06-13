import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { isNull } from 'util';
import { CookieService } from "ngx-cookie-service";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private location: Location, private cookieService: CookieService) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean  { 
        const isLoggedIn = !isNull(localStorage.getItem('gidai_user_profile')) && this.cookieService.get('access_token') != '';
        if (!isLoggedIn){
            localStorage.removeItem('gidai_user_profile');
            localStorage.clear();
            this.cookieService.delete('access_token');
            this.cookieService.delete('refresh_token');
            this.cookieService.delete('token_type');
            this.router.navigate(['/login']);
        }
        return isLoggedIn;
    }

}