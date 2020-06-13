import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class StatistiquesParBasesService {

    constructor(private httpClient: HttpClient) { }

    getPagedData(page, pageSize) {
        return this.httpClient.get(`${API.READ_All_BASE_FOR_STATISTICS}/${page}/${pageSize}`);
    }

    applyFilter(data, page, pageSize) {
        return this.httpClient.post(`${API.APPLY_FILTER_BASE_FOR_STATISTICS}/${page}/${pageSize}`, data);
    }
}
