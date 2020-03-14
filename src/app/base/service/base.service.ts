import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private httpClient: HttpClient) { }

    /**
     * Récupérer toutes les Bases pour les Statistiques
     * 
     */
    public lireToutesLesBasesPourStatistiques() {
        return this.httpClient.get(`${API.READ_All_BASE_FOR_STATISTICS}`);
    }
}
