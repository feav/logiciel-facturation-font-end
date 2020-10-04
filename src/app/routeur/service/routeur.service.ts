import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class RouteurService {

    constructor(private httpClient: HttpClient) { }

    getPagedData(pageSize, page){
        return this.httpClient.get(`${API.URL}`+'routeurs/paginate/'+pageSize+'?page='+page);
    }

    getPagedDataBySearchText(pageSize, page, searchText){
        return this.httpClient.get(`${API.URL}`+'routeurs/paginate/'+pageSize+'/searchText/'+searchText+'?page='+page);
    }

    create(data){
        return this.httpClient.post(`${API.CREATE_ROUTEUR}`, data);
    }

    update(id, data){
        return this.httpClient.post(`${API.UPDATE_ROUTEUR}`+id, data);
    }

    delete(id){
        return this.httpClient.post(`${API.DELETE_ROUTEUR}`+id, null);
    }

    enable(id) {
        return this.httpClient.post(`${API.ENABLE_ROUTEUR}` + id, null);
    }
}
