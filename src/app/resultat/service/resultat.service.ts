import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ResultatService {

    constructor(private httpClient: HttpClient) { }

    /**
     * Récupérer tous les Résultats enregistrés dans la BD
     * 
     */
    public lireTousLesResultats(){
        return this.httpClient.get(`${API.READ_All_RESULTAT}`);
    }

    /**
     * Mettre à jour un Résultat
     * 
     */
    public mettreAJourResultat(data){
        return this.httpClient.put(`${API.UPDATE_RESULTAT}/${data.id}`, data);
    }
}
