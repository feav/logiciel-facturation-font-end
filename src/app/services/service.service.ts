import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class Service {

    constructor(private httpClient: HttpClient) { }

    /**
     * Enregistrement d'un nouveau Routeur dans la BD
     * 
     * @param routeur 
     */
    public creerRouteur(routeur): Observable<Object>{
        return this.httpClient.post(`${API.CREATE_ROUTEUR}`, routeur);
    }

    /**
     * Enregistrement d'un nouvel Annonceur dans la BD
     * 
     * @param annonceur 
     */
    public creerAnnonceur(annonceur): Observable<Object>{
        return this.httpClient.post(`${API.CREATE_ANNONCEUR}`, annonceur);
    }

    /**
     * Enregistrement d'une nouvelle Base dans la BD
     * 
     * @param base
     */
    public creerBase(base): Observable<Object>{
        return this.httpClient.post(`${API.CREATE_BASE}`, base);
    }

    /**
     * Enregistrement d'une nouvelle Campagne dans la BD
     * 
     * @param campagne
     */
    public creerCampagne(campagne): Observable<Object>{
        return this.httpClient.post(`${API.CREATE_CAMPAGNE}`, campagne);
    }

    /**
     * Enregistrement d'un nouveau Planning dans la BD
     * 
     * @param planning
     */
    public creerPlanning(planning): Observable<Object>{
        return this.httpClient.post(`${API.CREATE_PLANNING}`, planning);
    }

    /**
     * Récupérer tous les Routeurs enregistrés dans la BD
     * 
     */
    public lireTousLesRouteurs(){
        return this.httpClient.get(`${API.READ_All_ROUTEUR}`);
    }

    /**
     * Récupérer tous les Annonceurs enregistrés dans la BD
     * 
     */
    public lireTousLesAnnonceurs(){
        return this.httpClient.get(`${API.READ_All_ANNONCEUR}`);
    }

    /**
     * Récupérer toutes les Bases enregistrées dans la BD correspondants au Routeur dont l'ID est passé en paramètre.
     * 
     */
    public lireToutesLesBasesPourUnRouteur(idRouteur:number){
        return this.httpClient.get(`${API.READ_All_BASE_BY_ROUTEUR_ID}/${idRouteur}`);
    }

    /**
     * Récupérer toutes les Campagnes enregistrées dans la BD correspondants à l'annonceur dont l'ID est passé en paramètre.
     * 
     */
    public lireToutesLesCampagnesPourUnAnnonceur(idAnnonceur:number){
        return this.httpClient.get(`${API.READ_All_CAMPAGNE_BY_ANNONCEUR_ID}/${idAnnonceur}`);
    }
}
