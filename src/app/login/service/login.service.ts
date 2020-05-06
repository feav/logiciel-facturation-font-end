import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private httpClient: HttpClient) { }

    login(data){
        return this.httpClient.post(`${API.LOG_IN_USER}`, data);
    }
}
