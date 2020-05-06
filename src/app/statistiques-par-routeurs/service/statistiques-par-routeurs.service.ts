import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class StatistiquesParRouteursService {

    constructor(private httpClient: HttpClient) { }

    getPagedData() {
        return this.httpClient.get(`${API.READ_All_ROUTEUR_FOR_STATISTICS}`);
    }

    applyFilter(data) {
        return this.httpClient.post(`${API.APPLY_FILTER_ROUTEUR_FOR_STATISTICS}`, data);
    }
}
