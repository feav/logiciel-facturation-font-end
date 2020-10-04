import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class BaseService {
    
    constructor(private httpClient: HttpClient) { }

    getPagedData(pageSize, page){
        return this.httpClient.get(`${API.URL}`+'bases/paginate/'+pageSize+'?page='+page);
    }

    getPagedDataBySearchText(pageSize, page, searchText){
        return this.httpClient.get(`${API.URL}`+'bases/paginate/'+pageSize+'/searchText/'+searchText+'?page='+page);
    }

    getAllRouteurs(){
        return this.httpClient.get(`${API.READ_All_ROUTEUR}`);
    }

    create(data){
        return this.httpClient.post(`${API.CREATE_BASE}`, data);
    }

    update(id, data){
        return this.httpClient.post(`${API.UPDATE_BASE}`+id, data);
    }

    delete(id){
        return this.httpClient.post(`${API.DELETE_BASE}`+id, null);
    }

    enable(id) {
        return this.httpClient.post(`${API.ENABLE_BASE}` + id, null);
    }
}
