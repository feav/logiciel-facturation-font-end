import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class StatistiquesParAnnonceursService {

    constructor(private httpClient: HttpClient) { }

    getPagedData() {
        return this.httpClient.get(`${API.READ_All_ANNONCEUR_FOR_STATISTICS}`);
    }

    applyFilter(data){
        return this.httpClient.post(`${API.APPLY_FILTER_ANNONCEUR_FOR_STATISTICS}`, data);
    }
}
