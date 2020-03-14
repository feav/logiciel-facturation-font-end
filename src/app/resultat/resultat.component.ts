import { Component, OnInit } from '@angular/core';
import { SelectItem, MessageService } from 'primeng/api';
import { ResultatService } from './service/resultat.service'

@Component({
    selector: 'app-resultat',
    templateUrl: './resultat.component.html',
    styleUrls: ['./resultat.component.css']
})
export class ResultatComponent implements OnInit {

    filters: SelectItem[];
    resultats = [];
    resultats2 = [];

    copieResultats = {};

    loading: Boolean = true;

    selectedFilters: string[] = [];

    constructor(public resultatService: ResultatService,
                private messageService: MessageService) { }

    ngOnInit() {
        this.filters = [
            {label: 'Date', value: "date"},
            {label: 'Routeur', value: "routeur"},
            {label: 'Base', value: "base"},
            {label: 'Annonceur', value: "annonceur"},
            {label: 'Campagne', value: "campagne"},
        ]

        this.selectedFilters = ["date", "routeur", "base", "annonceur", "campagne"];

        this.resultatService
            .lireTousLesResultats()
            .subscribe(
                (resp:any) => {
                    this.resultats = resp.body;
                    this.resultats2 = resp.body;
                    this.loading = false;
                },
                (error) => { this.loading = false; },
            );
    }

    onRowEditInit(data) {
        this.copieResultats[data.id] = {...data};
    }

    onRowEditSave(data) {
        //
        this.resultatService
            .mettreAJourResultat(data)
            .subscribe(
                (resp:any) => {
                    if(resp.code == 200){
                        this.loading = true;
                        this.resultatService
                            .lireTousLesResultats()
                            .subscribe(
                                (resp:any) => {
                                    this.resultats = resp.body;
                                    this.resultats2 = resp.body;
                                    this.loading = false;
                                    this.messageService.add({severity:'success', summary: 'Résultat', detail:'Résultat mis à jour avec succès !'});
                                },
                                (error) => { this.loading = false; },
                            );
                    }
                    else
                        this.messageService.add({severity:'error', summary: 'Résultat', detail:'Une erreur est survenue !'});
                },
                (error) => {this.messageService.add({severity:'error', summary: 'Résultat', detail:'Une erreur est survenue !'}); },
            );
    }

    onRowEditCancel(data, index:number) {
        this.resultats2[index] = this.copieResultats[data.id];
        delete this.copieResultats[data.id];
    }

    filterIsActive(filter){
        if(this.selectedFilters.includes(filter))
            return true;
        else
            return false;
    }
}
