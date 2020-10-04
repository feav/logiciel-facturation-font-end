import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AnnonceurService {

    constructor(private httpClient: HttpClient) { }

    getPagedData(pageSize, page) {
        return this.httpClient.get(`${API.URL}` + 'annonceurs/paginate/' + pageSize + '?page=' + page);
    }

    getPagedDataBySearchText(pageSize, page, searchText) {
        return this.httpClient.get(`${API.URL}` + 'annonceurs/paginate/' + pageSize + '/searchText/' + searchText + '?page=' + page);
    }

    create(data) {
        return this.httpClient.post(`${API.CREATE_ANNONCEUR}`, data);
    }

    update(id, data) {
        return this.httpClient.post(`${API.UPDATE_ANNONCEUR}` + id, data);
    }

    delete(id) {
        return this.httpClient.post(`${API.DELETE_ANNONCEUR}` + id, null);
    }

    enable(id) {
        return this.httpClient.post(`${API.ENABLE_ANNONCEUR}` + id, null);
    }
}
