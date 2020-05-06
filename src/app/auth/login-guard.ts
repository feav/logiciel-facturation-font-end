import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { isNull } from 'util';

@Injectable()
export class LoginGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean  { 
        const isLoggedIn = !isNull(localStorage.getItem('gidai_user_profile'));
        if (isLoggedIn)
            this.router.navigate(['/']);
        return !isLoggedIn;
    }

}