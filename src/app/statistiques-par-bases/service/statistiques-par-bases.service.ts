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

    getPagedDataAnnonceurs(base_id, page, pageSize) {
        return this.httpClient.get(`${API.READ_All_ANNONCEUR_FOR_STATISTICS_FOR_BASES}/${base_id}/${page}/${pageSize}`);
    }

    applyFilterAnnonceurs(base_id, data, page, pageSize){
        return this.httpClient.post(`${API.APPLY_FILTER_ANNONCEUR_FOR_STATISTICS_FOR_BASES}/${base_id}/${page}/${pageSize}`, data);
    }

    getPagedDataCampagnes(base_id, annonceur_id, page, pageSize) {
        return this.httpClient.get(`${API.READ_All_CAMPAGNE_FOR_STATISTICS_FOR_BASES}/${base_id}/${annonceur_id}/${page}/${pageSize}`);
    }

    applyFilterCampagnes(base_id, annonceur_id, data, page, pageSize){
        return this.httpClient.post(`${API.APPLY_FILTER_CAMPAGNE_FOR_STATISTICS_FOR_BASES}/${base_id}/${annonceur_id}/${page}/${pageSize}`, data);
    }

    getPagedDataRouteurs(base_id, annonceur_id, campagne_id, page, pageSize) {
        return this.httpClient.get(`${API.READ_All_ROUTEUR_FOR_STATISTICS_FOR_BASES}/${base_id}/${annonceur_id}/${campagne_id}/${page}/${pageSize}`);
    }

    applyFilterRouteurs(base_id, annonceur_id, campagne_id, data, page, pageSize){
        return this.httpClient.post(`${API.APPLY_FILTER_ROUTEUR_FOR_STATISTICS_FOR_BASES}/${base_id}/${annonceur_id}/${campagne_id}/${page}/${pageSize}`, data);
    }
}
