import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ResultatService {

    constructor(private httpClient: HttpClient) { }

    getPagedData(pageSize, page) {
        return this.httpClient.get(`${API.URL}resultats/paginate/`+ pageSize + '?page=' + page);
    }

    getPagedDataBySearchText(pageSize, page, searchText) {
        return this.httpClient.get(`${API.URL}resultats/paginate/`+ pageSize + '/searchText/' + searchText + '?page=' + page);
    }

    getAllRouteurs(){
        return this.httpClient.get(`${API.READ_All_ROUTEUR}`);
    }

    getAllBasesForOneRouteur(idRouteur:number){
        return this.httpClient.get(`${API.READ_All_BASE_BY_ROUTEUR_ID}/${idRouteur}`);
    }

    getAllAnnonceurs(){
        return this.httpClient.get(`${API.READ_All_ANNONCEUR}`);
    }

    getAllCampagnesForOneAnnonceur(idAnnonceur:number){
        return this.httpClient.get(`${API.READ_All_CAMPAGNE_BY_ANNONCEUR_ID}/${idAnnonceur}`);
    }
    
    applyFilter(data, pageSize, page){
        return this.httpClient.post(`${API.APPLY_FILTER_RESULTAT}/${pageSize}?page=${page}`, data);
    }

    update(id, data) {
        return this.httpClient.post(`${API.UPDATE_RESULTAT}` + id, data);
    }
}
