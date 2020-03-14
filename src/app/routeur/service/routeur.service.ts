import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class RouteurService {

    constructor(private httpClient: HttpClient) { }

    /**
     * Récupérer tous les Routeurs pour les Statistiques
     * 
     */
    public lireTousLesRouteursPourStatistiques(){
        return this.httpClient.get(`${API.READ_All_ROUTEUR_FOR_STATISTICS}`);
    }
}
