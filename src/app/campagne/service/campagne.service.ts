import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CampagneService {

  constructor(private httpClient: HttpClient) { }

  getPagedData(pageSize, page){
      return this.httpClient.get(`${API.URL}`+'campagnes/paginate/'+pageSize+'?page='+page);
  }

  getPagedDataBySearchText(pageSize, page, searchText){
      return this.httpClient.get(`${API.URL}`+'campagnes/paginate/'+pageSize+'/searchText/'+searchText+'?page='+page);
  }

  getAllAnnonceurs(){
      return this.httpClient.get(`${API.READ_All_ANNONCEUR}`);
  }

  create(data){
      return this.httpClient.post(`${API.CREATE_CAMPAGNE}`, data);
  }

  update(id, data){
      return this.httpClient.post(`${API.UPDATE_CAMPAGNE}`+id, data);
  }

  delete(id){
      return this.httpClient.post(`${API.DELETE_CAMPAGNE}`+id, null);
  }
}
