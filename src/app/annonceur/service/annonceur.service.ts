import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AnnonceurService {

    constructor(private httpClient: HttpClient) { }

    /**
     * Récupérer tous les Annonceurs pour les Statistiques
     * 
     */
    public lireTousLesAnnonceursPourStatistiques() {
        return this.httpClient.get(`${API.READ_All_ANNONCEUR_FOR_STATISTICS}`);
    }
}
