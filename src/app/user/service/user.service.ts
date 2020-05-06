import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private httpClient: HttpClient) { }

    getPagedData(pageSize, page) {
        return this.httpClient.get(`${API.URL}` + 'users/paginate/' + pageSize + '?page=' + page);
    }

    getPagedDataBySearchText(pageSize, page, searchText) {
        return this.httpClient.get(`${API.URL}` + 'users/paginate/' + pageSize + '/searchText/' + searchText + '?page=' + page);
    }

    getAllRoles(){
        return this.httpClient.get(`${API.READ_All_ROLE}`);
    }

    create(data) {
        return this.httpClient.post(`${API.CREATE_USER}`, data);
    }

    update(id, data) {
        return this.httpClient.post(`${API.UPDATE_USER}` + id, data);
    }

    delete(id) {
        return this.httpClient.post(`${API.DELETE_USER}` + id, null);
    }
}
