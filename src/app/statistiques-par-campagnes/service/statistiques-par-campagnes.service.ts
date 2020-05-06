import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class StatistiquesParCampagnesService {

    constructor(private httpClient: HttpClient) { }

    getPagedData() {
        return this.httpClient.get(`${API.READ_All_CAMPAGNE_FOR_STATISTICS}`);
    }

    applyFilter(data) {
        return this.httpClient.post(`${API.APPLY_FILTER_CAMPAGNE_FOR_STATISTICS}`, data);
    }
}
