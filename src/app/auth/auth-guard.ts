import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { isNull } from 'util';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private location: Location) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean  { 
        const isLoggedIn = !isNull(localStorage.getItem('gidai_user_profile'));
        if (!isLoggedIn)
            this.router.navigate(['/login']);
        return isLoggedIn;
    }

}