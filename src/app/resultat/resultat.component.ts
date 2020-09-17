import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { DropdownModel } from '../model/dropdown-model';
import { ResultatService } from './service/resultat.service';
import * as moment from 'moment';
import * as $ from 'jquery';
import * as drp from 'src/assets/daterangepicker/daterangepicker';

var daterangepicker : any =  drp;

@Component({
    selector: 'app-resultat',
    templateUrl: './resultat.component.html',
    styleUrls: ['./resultat.component.css']
})
export class ResultatComponent implements OnInit {

    showLoader: Boolean = true;
    showResultatModalForm: Boolean = false;

    resultatFormGroup: FormGroup;

    resultats = [];
    cols: any[];
    routeurs = [];
    annonceurs = [];
    campagnesPourResultat = [];
    basesPourResultat = [];

    ranges: any = {
        'Ce Jour': [moment(), moment()],
        'Cette Semaine': [moment().startOf('week').add('days', 1), moment().endOf('week').add('days', 1)],
        'Ce mois': [moment().startOf('month'), moment().endOf('month')]
    };

    locale: any  = {
        applyLabel: 'Valider',
        cancelLabel: 'Annuler',
        fromLabel: 'De',
        toLabel: 'A',
        weekLabel: 'W',
        customRangeLabel: 'Personnalisé',
        firstDay: 1
    };

    filter_data = {
        filtre_routeur: null,
        filtre_base: null,
        filtre_annonceur: null,
        filtre_campagne: null,
        filtre_date_debut : moment().startOf('year'),
        filtre_date_fin : moment().endOf('month')
    };

    selectedResultat: any={
        annonceur: "",
        campagne: "",
        routeur: "",
        base: "",
        date: "",
        heure: ""
    };

    filterText = "";
    dialogHeader = "";

    totalServerItems = 0;
    totalCurrentPageItems = 0;

    pagingOptions = {
        pageSizes: [15, 25, 50, 100],
        pageSize: 15,
        currentPage: 1,
        maxSize: 5
    };

    constructor(public resultatService: ResultatService,
                private messageService: MessageService,
                private formBuilder: FormBuilder) { }

    ngOnInit() {
        var self = this;
        $(document).ready(function(){
            $('#reportrange').daterangepicker({
                opens: 'center',
                locale: self.locale,
                startDate: self.filter_data.filtre_date_debut,
                endDate: self.filter_data.filtre_date_fin,
                ranges: self.ranges
            }, function(start, end, label) {
                self.filter_data.filtre_date_debut = start;
                self.filter_data.filtre_date_fin = end;
            });
        });

        this.getPagedDataAsync(this.pagingOptions.pageSize, this.pagingOptions.currentPage, this.filterText);

        this.resultatService
            .getAllRouteurs()
            .subscribe(
                (resp:any) => {
                    for(let routeur of resp.body){
                        let dropdownModel = new DropdownModel();
                        dropdownModel.label = routeur.nom;
                        dropdownModel.value = routeur.id;
                        this.routeurs.push(dropdownModel);
                    }
                },
                (error) => {}
            );

        this.resultatService
            .getAllAnnonceurs()
            .subscribe(
                (resp:any) => {
                    for(let annonceur of resp.body){
                        let dropdownModel = new DropdownModel();
                        dropdownModel.label = annonceur.nom;
                        dropdownModel.value = annonceur.id;
                        this.annonceurs.push(dropdownModel);
                    }
                },
                (error) => {}
            );
        this.cols = [
            { field: 'date', header: "Date d'envoi" },
            { field: 'heure', header: "Heure d'envoi" },
            { field: 'nom_routeur', header: 'Routeur' },
            { field: 'nom_base', header: 'Base' },
            { field: 'nom_annonceur', header: 'Annonceur' },
            { field: 'nom_campagne', header: 'Campagne' },
            { field: 'volume', header: 'Volume' },
            { field: 'resultat', header: 'Résultat' },
            { field: 'cree_le', header: 'Créé le' },
            { field: 'cree_par', header: 'Créé par' },
            { field: 'modifie_le', header: 'Modifié le' },
            { field: 'modifie_par', header: 'Modifié par' }
        ];

        this.resultatFormGroup = this.formBuilder.group({
            'id': new FormControl(null),
            'annonceur': new FormControl({value: '', disabled: true}),
            'campagne': new FormControl({value: '', disabled: true}),
            'routeur': new FormControl({value: '', disabled: true}),
            'base': new FormControl({value: '', disabled: true}),
            'volume': new FormControl(null, Validators.required ),
            'resultat': new FormControl(null,  Validators.required),
            'date_envoi': new FormControl({value: '', disabled: true}),
            'heure_envoi': new FormControl({value: '', disabled: true})
        });
    }

    cb() {
        return this.filter_data.filtre_date_debut.format('DD/MM/YYYY') + ' - ' + this.filter_data.filtre_date_fin.format('DD/MM/YYYY');
    }

    onRowSelect(event) {
        this.dialogHeader = "Modifier ce Resultat";
        this.resultatFormGroup.setValue({
            id: event.data.id,
            annonceur: event.data.nom_annonceur,
            campagne: event.data.nom_campagne,
            routeur: event.data.nom_routeur,
            base: event.data.nom_base,
            volume: event.data.volume,
            resultat: event.data.resultat,
            date_envoi: event.data.date,
            heure_envoi: event.data.heure
        });
        this.showResultatModalForm = true;
    }
      
    setPagingData(data){  
        this.resultats = data.body;
        this.totalServerItems = data.total;
        this.totalCurrentPageItems = data.total_current_page;
    }

    onPageChange(event){
        if(this.pagingOptions.currentPage != (event.page+1) || this.pagingOptions.pageSize != event.rows){
            this.pagingOptions.currentPage = (event.page+1);
            this.pagingOptions.pageSize = event.rows;
            this.getPagedDataAsync(this.pagingOptions.pageSize, this.pagingOptions.currentPage, this.filterText);
        }
    }

    onFilterChange(text){
        this.getPagedDataAsync(this.pagingOptions.pageSize, this.pagingOptions.currentPage, this.filterText);
    }

    getPagedDataAsync(pageSize, page, searchText) {
        this.showLoader = true;
        if(searchText) {
            this.resultatService
                .getPagedDataBySearchText(pageSize, page, searchText)
                .subscribe(
                    (resp:any) => {
                        this.setPagingData(resp);
                        this.showLoader = false;
                    },
                    (error) => { 
                        this.showLoader = false;
                        this.messageService.add({severity:'error', summary:'Resultats', detail:'Une erreur est survenue durant la récupération des données !'});

                    },
                );
        }else{
            this.validerFiltre();
        }
    }

    onAnnonceurChange(){
        this.campagnesPourResultat = [];
        this.resultatService
            .getAllCampagnesForOneAnnonceur(this.filter_data.filtre_annonceur)
            .subscribe(
                (resp:any) => {
                    for(let campagne of resp.body){
                        let dropdownModel = new DropdownModel();
                        dropdownModel.label = campagne.nom;
                        dropdownModel.value = campagne.id;
                        this.campagnesPourResultat.push(dropdownModel);
                    }
                },
                (error) => { 
                    this.messageService.add({severity:'error', summary:'Resultats', detail:'Une erreur est survenue durant la récupération des campagnes pour cet annonceur !'});
                },
            );
    }

    onRouteurChange(){
        this.basesPourResultat = [];
        this.resultatService
        .getAllBasesForOneRouteur(this.filter_data.filtre_routeur)
        .subscribe(
            (resp:any) => {
                for(let routeur of resp.body){
                    let dropdownModel = new DropdownModel();
                    dropdownModel.label = routeur.nom;
                    dropdownModel.value = routeur.id;
                    this.basesPourResultat.push(dropdownModel);
                }
            },
            (error) => { 
                this.messageService.add({severity:'error', summary:'Resultats', detail:'Une erreur est survenue durant la récupération des bases pour ce routeur !'});
            },
        );
    }

    validerFiltre(){
        this.showLoader = true;
        this.resultatService
        .applyFilter(this.filter_data, this.pagingOptions.pageSize, this.pagingOptions.currentPage)
        .subscribe(
            (resp:any) => {
                this.setPagingData(resp);
                this.showLoader = false;
            },
            (error) => {
                this.messageService.add({severity:'error', summary:'Resultats', detail:'Une erreur est survenue durant le filtrage !'});
                this.showLoader = false;
            }
        );
    }

    viderFiltre(){
        this.filter_data.filtre_routeur= null;
        this.filter_data.filtre_base= null;
        this.filter_data.filtre_annonceur= null;
        this.filter_data.filtre_campagne= null;
    }

    updateResultat() {
        this.resultatService
            .update(this.resultatFormGroup.value.id, this.resultatFormGroup.value)
            .subscribe(
                (resp:any) => {
                    this.getPagedDataAsync(this.pagingOptions.pageSize, this.pagingOptions.currentPage, this.filterText);
                    this.messageService.add({severity:'success', summary:'Resultats', detail:'Resultat modifié avec succès !'});
                    this.showResultatModalForm = false;
                },
                (error) => { 
                    this.getPagedDataAsync(this.pagingOptions.pageSize, this.pagingOptions.currentPage, this.filterText);
                    this.messageService.add({severity:'error', summary:'Resultats', detail:'Une erreur est survenue durant la mise à jour !'});
                },
            );
    }

}
