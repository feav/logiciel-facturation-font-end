import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CookieService } from "ngx-cookie-service";
import { ThemeOptions } from '../../theme-options';
import { API, getLoggedUser } from 'src/environments/environment';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

    currentUser: any;

    constructor(public globals: ThemeOptions,
                private router: Router,
                private cookieService: CookieService,
                private httpClient: HttpClient,
                public activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.currentUser = getLoggedUser();
    }

    getPageTitle() {
        return this.getChild(this.activatedRoute).data.value.title;
    }

    getChild(activatedRoute: ActivatedRoute) {
        if (activatedRoute.firstChild)
            return this.getChild(activatedRoute.firstChild);
        else
            return activatedRoute;
    }

    toggleSidebarMobileOpen() {
        this.globals.toggleSidebarMobile = !this.globals.toggleSidebarMobile;
        this.globals.toggleSidebar = false;
    }

    logout() {
        this.httpClient
            .post(`${API.LOG_OUT_USER}`, null)
            .subscribe(
                (resp:any) => {
                    if(resp.code == 200){
                        localStorage.clear();
                        localStorage.removeItem('gidai_session');
                        this.cookieService.delete('access_token');
                        this.cookieService.delete('refresh_token');
                        this.cookieService.delete('token_type');
                        this.router.navigate(['/login']);
                    }
                },
                (error) => {}
            )
    }

}
