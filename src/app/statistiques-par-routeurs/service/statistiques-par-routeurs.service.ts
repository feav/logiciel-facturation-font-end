import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class StatistiquesParRouteursService {

    constructor(private httpClient: HttpClient) { }

    getPagedData(page, pageSize) {
        return this.httpClient.get(`${API.READ_All_ROUTEUR_FOR_STATISTICS}/${page}/${pageSize}`);
    }

    applyFilter(data, page, pageSize) {
        return this.httpClient.post(`${API.APPLY_FILTER_ROUTEUR_FOR_STATISTICS}/${page}/${pageSize}`, data);
    }

    getPagedDataBases(routeur_id, page, pageSize) {
        return this.httpClient.get(`${API.READ_All_BASE_FOR_STATISTICS_FOR_ROUTEURS}/${routeur_id}/${page}/${pageSize}`);
    }

    applyFilterBases(routeur_id, data, page, pageSize){
        return this.httpClient.post(`${API.APPLY_FILTER_BASE_FOR_STATISTICS_FOR_ROUTEURS}/${routeur_id}/${page}/${pageSize}`, data);
    }

    getPagedDataAnnonceurs(routeur_id, base_id, page, pageSize) {
        return this.httpClient.get(`${API.READ_All_ANNONCEUR_FOR_STATISTICS_FOR_ROUTEURS}/${routeur_id}/${base_id}/${page}/${pageSize}`);
    }

    applyFilterAnnonceurs(routeur_id, base_id, data, page, pageSize){
        return this.httpClient.post(`${API.APPLY_FILTER_ANNONCEUR_FOR_STATISTICS_FOR_ROUTEURS}/${routeur_id}/${base_id}/${page}/${pageSize}`, data);
    }

    getPagedDataCampagnes(routeur_id, base_id, annonceur_id, page, pageSize) {
        return this.httpClient.get(`${API.READ_All_CAMPAGNE_FOR_STATISTICS_FOR_ROUTEURS}/${routeur_id}/${base_id}/${annonceur_id}/${page}/${pageSize}`);
    }

    applyFilterCampagnes(routeur_id, base_id, annonceur_id, data, page, pageSize){
        return this.httpClient.post(`${API.APPLY_FILTER_CAMPAGNE_FOR_STATISTICS_FOR_ROUTEURS}/${routeur_id}/${base_id}/${annonceur_id}/${page}/${pageSize}`, data);
    }
}
