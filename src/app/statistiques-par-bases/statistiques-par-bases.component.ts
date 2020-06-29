import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MessageService, TreeNode } from 'primeng/api';
import { StatistiquesParBasesService } from './service/statistiques-par-bases.service';
import * as moment from 'moment';
import * as $ from 'jquery';
import * as drp from 'src/assets/daterangepicker/daterangepicker';

var daterangepicker: any = drp;

@Component({
    selector: 'app-statistiques-par-bases',
    templateUrl: './statistiques-par-bases.component.html',
    styleUrls: ['./statistiques-par-bases.component.css']
})
export class StatistiquesParBasesComponent implements OnInit {

    ranges: any = {
        '30 derniers jours': [moment().subtract('days', 30), moment()],
        '60 derniers jours': [moment().subtract('days', 60), moment()],
        '90 derniers jours': [moment().subtract('days', 90), moment()]
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

    filter_data: any = {
        filtre_date_debut : moment().subtract('days', 30),
        filtre_date_fin : moment()
    };
    showLoader: Boolean = true;
    tab: any[] = [];
    cols: any[];
    colsRouteurs: any[];

    totalServerItems = 0;
    totalCurrentPageItems = 0;
    totalVolume = 0;
    totalPA = 0;
    totalCA = 0;
    totalMarge = 0;
    totalVolumePartiel = 0;
    totalPAPartiel = 0;
    totalCAPartiel = 0;
    totalMargePartiel = 0;

    ////Pour les annonceurs liés à la base sélectionnée
    pagingOptionsAnnonceurs: any;
    showLoaderAnnonceurs: Boolean = true;
    filter_dataAnnonceurs: any = {
        filtre_date_debut : moment().subtract('days', 30),
        filtre_date_fin : moment()
    };
    showDialogAnnonceurs: Boolean = false;
    tabAnnonceurs: any[] = [];
    dialogHeaderAnnonceurs: string;
    totalServerItemsAnnonceurs = 0;
    totalCurrentPageItemsAnnonceurs = 0;
    totalVolumeAnnonceurs = 0;
    totalPAAnnonceurs = 0;
    totalCAAnnonceurs = 0;
    totalMargeAnnonceurs = 0;
    totalVolumePartielAnnonceurs = 0;
    totalPAPartielAnnonceurs = 0;
    totalCAPartielAnnonceurs = 0;
    totalMargePartielAnnonceurs = 0;

    //Pour les campagnes liées à l'annonceur lié  la base sélectionnée
    pagingOptionsCampagnes: any;
    showLoaderCampagnes: Boolean = true;
    filter_dataCampagnes: any = {
        filtre_date_debut : moment().subtract('days', 30),
        filtre_date_fin : moment()
    };
    showDialogCampagnes: Boolean = false;
    tabCampagnes: any[] = [];
    dialogHeaderCampagnes: string;
    totalServerItemsCampagnes = 0;
    totalCurrentPageItemsCampagnes = 0;
    totalVolumeCampagnes = 0;
    totalPACampagnes = 0;
    totalCACampagnes = 0;
    totalMargeCampagnes = 0;
    totalVolumePartielCampagnes = 0;
    totalPAPartielCampagnes = 0;
    totalCAPartielCampagnes = 0;
    totalMargePartielCampagnes = 0;

    //Pour les routeurs liés à la campagne liée à l'annonceur dans les résultats lié à la base sélectionnée
    pagingOptionsRouteurs: any;
    showLoaderRouteurs: Boolean = true;
    filter_dataRouteurs: any = {
        filtre_date_debut : moment().subtract('days', 30),
        filtre_date_fin : moment()
    };
    showDialogRouteurs: Boolean = false;
    tabRouteurs: any[] = [];
    dialogHeaderRouteurs: string;
    totalServerItemsRouteurs = 0;
    totalCurrentPageItemsRouteurs = 0;
    totalVolumeRouteurs = 0;
    totalPARouteurs = 0;
    totalCARouteurs = 0;
    totalMargeRouteurs = 0;
    totalVolumePartielRouteurs = 0;
    totalPAPartielRouteurs = 0;
    totalCAPartielRouteurs = 0;
    totalMargePartielRouteurs = 0;

    selectedBase: any;
    selectedAnnonceur: any;
    selectedCampagne: any;

    pagingOptions = this.pagingOptionsAnnonceurs = this.pagingOptionsCampagnes = this.pagingOptionsRouteurs = {
        pageSizes: [15, 25, 50, 100],
        pageSize: 15,
        currentPage: 1,
        maxSize: 5
    };

    constructor(public service: StatistiquesParBasesService,
                private messageService: MessageService) { }

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

            $('#reportrangeAnnonceurs').daterangepicker({
                opens: 'center',
                locale: self.locale,
                startDate: self.filter_dataAnnonceurs.filtre_date_debut,
                endDate: self.filter_dataAnnonceurs.filtre_date_fin,
                ranges: self.ranges
            }, function(start, end, label) {
                self.filter_dataAnnonceurs.filtre_date_debut = start;
                self.filter_dataAnnonceurs.filtre_date_fin = end;
            });

            $('#reportrangeCampagnes').daterangepicker({
                opens: 'center',
                locale: self.locale,
                startDate: self.filter_dataCampagnes.filtre_date_debut,
                endDate: self.filter_dataCampagnes.filtre_date_fin,
                ranges: self.ranges
            }, function(start, end, label) {
                self.filter_dataCampagnes.filtre_date_debut = start;
                self.filter_dataCampagnes.filtre_date_fin = end;
            });

            $('#reportrangeRouteurs').daterangepicker({
                opens: 'center',
                locale: self.locale,
                startDate: self.filter_dataRouteurs.filtre_date_debut,
                endDate: self.filter_dataRouteurs.filtre_date_fin,
                ranges: self.ranges
            }, function(start, end, label) {
                self.filter_dataRouteurs.filtre_date_debut = start;
                self.filter_dataRouteurs.filtre_date_fin = end;
            });
        });

        this.getPagedDataAsync(this.pagingOptions.pageSize, this.pagingOptions.currentPage);

        this.cols = [
            { field: 'nom', header: 'Nom' },
            { field: 'ca', header: "Chiffre d'Affaires" },
            { field: 'pa', header: "Prix d'achat" },
            { field: 'pm', header: 'Prix Marge' }
        ];

        this.colsRouteurs = [
            { field: 'nom', header: 'Nom' },
            { field: 'prix', header: 'Prix' },
            { field: 'volume', header: "Volume" },
            { field: 'ca', header: "Chiffre d'Affaires" },
            { field: 'pa', header: "Prix d'achat" },
            { field: 'pm', header: 'Prix Marge' }
        ];
    }

    cb() {
        return this.filter_data.filtre_date_debut.format('DD/MM/YYYY') + ' - ' + this.filter_data.filtre_date_fin.format('DD/MM/YYYY');
    }

    validerFiltre(){
        this.showLoader = true;
        this.service
            .applyFilter(this.filter_data, this.pagingOptions.currentPage, this.pagingOptions.pageSize)
            .subscribe(
                (resp:any) => {
                    this.setPagingData(resp, this.pagingOptions.currentPage, this.pagingOptions.pageSize);
                    this.messageService.add({severity:'success', summary:'Statistiques par Annonceurs', detail:'Filtrage effectué avec succès !'});
                    this.showLoader = false;
                },
                (error) => { 
                    this.messageService.add({severity:'error', summary:'Statistiques par Annonceurs', detail:'Une erreur est survenue durant le filtrage !'});
                    this.showLoader = false;
                },
            );
    }

    setPagingData(resp, page, pageSize){  
        this.tab = resp.response.body;
        this.totalServerItems = resp.total;
        this.totalCurrentPageItems = resp.response.body.length;
        this.totalVolume = resp.totalVolume;
        this.totalPA = resp.totalPA;
        this.totalCA = resp.totalCA;
        this.totalMarge = resp.totalMarge;
        this.totalVolumePartiel = resp.totalVolumePartiel;
        this.totalPAPartiel = resp.totalPAPartiel;
        this.totalCAPartiel = resp.totalCAPartiel;
        this.totalMargePartiel = resp.totalMargePartiel;
    }

    onPageChange(event){
        if(this.pagingOptions.currentPage != (event.page+1) || this.pagingOptions.pageSize != event.rows){
            this.pagingOptions.currentPage = (event.page+1);
            this.pagingOptions.pageSize = event.rows;
            this.getPagedDataAsync(this.pagingOptions.pageSize, this.pagingOptions.currentPage);
        }
    }

    getPagedDataAsync(pageSize, page) {
        this.showLoader = true;
        this.service
            .getPagedData(page, pageSize)
            .subscribe(
                (resp:any) => {
                    this.setPagingData(resp, page, pageSize);
                    this.showLoader = false;
                },
                (error) => { 
                    this.showLoader = false;
                    this.messageService.add({severity:'error', summary:'Statistiques par Annonceurs', detail:'Une erreur est survenue durant la récupération des données !'});
                },
            );
    }

    onRowSelect(event){
        //console.log(event);
        this.dialogHeaderAnnonceurs = "Base : " + event.data.base.nom + " / Annonceurs";
        this.selectedBase = event.data.base;
        this.reinitializeStatsForAnnonceurs();
        this.showDialogAnnonceurs = true;
        this.getPagedDataAsyncAnnonceurs(this.pagingOptionsAnnonceurs.pageSize, this.pagingOptionsAnnonceurs.currentPage);
    }




    //Pour les annonceurs liés à la base sélectionnée
    reinitializeStatsForAnnonceurs(){
        this.tabAnnonceurs = [];
        this.totalCAAnnonceurs = 0;
        this.totalCAPartielAnnonceurs = 0;
        this.totalMargeAnnonceurs = 0;
        this.totalMargePartielAnnonceurs = 0;
        this.totalPAAnnonceurs = 0;
        this.totalPAPartielAnnonceurs = 0;
        this.totalVolumeAnnonceurs = 0;
        this.totalVolumePartielAnnonceurs = 0;
    }

    cbAnnonceurs() {
        return this.filter_dataAnnonceurs.filtre_date_debut.format('DD/MM/YYYY') + ' - ' + this.filter_dataAnnonceurs.filtre_date_fin.format('DD/MM/YYYY');
    }

    validerFiltreAnnonceurs(){
        this.showLoaderAnnonceurs = true;
        this.service
            .applyFilterAnnonceurs(this.selectedBase.id, this.filter_dataAnnonceurs, this.pagingOptionsAnnonceurs.currentPage, this.pagingOptionsAnnonceurs.pageSize)
            .subscribe(
                (resp:any) => {
                    this.setPagingDataAnnonceurs(resp);
                    this.messageService.add({severity:'success', summary:'Statistiques par Annonceurs', detail:'Filtrage effectué avec succès !'});
                    this.showLoaderAnnonceurs = false;
                },
                (error) => { 
                    this.messageService.add({severity:'error', summary:'Statistiques par Annonceurs', detail:'Une erreur est survenue durant le filtrage !'});
                    this.showLoaderAnnonceurs = false;
                },
            );
    }

    setPagingDataAnnonceurs(resp){  
        this.tabAnnonceurs = resp.response.body;
        this.totalServerItemsAnnonceurs = resp.total;
        this.totalCurrentPageItemsAnnonceurs = resp.response.body.length;
        this.totalVolumeAnnonceurs = resp.totalVolume;
        this.totalPAAnnonceurs = resp.totalPA;
        this.totalCAAnnonceurs = resp.totalCA;
        this.totalMargeAnnonceurs = resp.totalMarge;
        this.totalVolumePartielAnnonceurs = resp.totalVolumePartiel;
        this.totalPAPartielAnnonceurs = resp.totalPAPartiel;
        this.totalCAPartielAnnonceurs = resp.totalCAPartiel;
        this.totalMargePartielAnnonceurs = resp.totalMargePartiel;
    }

    onPageChangeAnnonceurs(event){
        if(this.pagingOptionsAnnonceurs.currentPage != (event.page+1) || this.pagingOptionsAnnonceurs.pageSize != event.rows){
            this.pagingOptionsAnnonceurs.currentPage = (event.page+1);
            this.pagingOptionsAnnonceurs.pageSize = event.rows;
            this.getPagedDataAsyncAnnonceurs(this.pagingOptionsAnnonceurs.pageSize, this.pagingOptionsAnnonceurs.currentPage);
        }
    }

    getPagedDataAsyncAnnonceurs(pageSize, page) {
        this.showLoaderAnnonceurs = true;
        this.service
            .getPagedDataAnnonceurs(this.selectedBase.id, page, pageSize)
            .subscribe(
                (resp:any) => {
                    this.setPagingDataAnnonceurs(resp);
                    this.showLoaderAnnonceurs = false;
                },
                (error) => { 
                    this.showLoaderAnnonceurs = false;
                    this.messageService.add({severity:'error', summary:'Statistiques par Annonceurs', detail:'Une erreur est survenue durant la récupération des données !'});
                },
            );
    }

    onRowSelectAnnonceurs(event){
        this.dialogHeaderCampagnes = "Annonceur : " + event.data.annonceur.nom + " / Campagnes";
        this.reinitializeStatsForCampagnes();
        this.showDialogCampagnes = true;
        this.selectedAnnonceur = event.data.annonceur;
        this.getPagedDataAsyncCampagnes(this.pagingOptionsCampagnes.pageSize, this.pagingOptionsCampagnes.currentPage);
    }


    //Pour les campagnes liées à l'annonceur lié  la base sélectionnée
    reinitializeStatsForCampagnes(){
        this.tabCampagnes = [];
        this.totalCACampagnes = 0;
        this.totalCAPartielCampagnes = 0;
        this.totalMargeCampagnes = 0;
        this.totalMargePartielCampagnes = 0;
        this.totalPACampagnes = 0;
        this.totalPAPartielCampagnes = 0;
        this.totalVolumeCampagnes = 0;
        this.totalVolumePartielCampagnes = 0;
    }

    cbCampagnes() {
        return this.filter_dataCampagnes.filtre_date_debut.format('DD/MM/YYYY') + ' - ' + this.filter_dataCampagnes.filtre_date_fin.format('DD/MM/YYYY');
    }

    validerFiltreCampagnes(){
        this.showLoaderCampagnes = true;
        this.service
            .applyFilterCampagnes(this.selectedBase.id, this.selectedAnnonceur.id, this.filter_dataCampagnes, this.pagingOptionsCampagnes.currentPage, this.pagingOptionsCampagnes.pageSize)
            .subscribe(
                (resp:any) => {
                    this.setPagingDataCampagnes(resp);
                    this.messageService.add({severity:'success', summary:'Statistiques par Annonceurs', detail:'Filtrage effectué avec succès !'});
                    this.showLoaderCampagnes = false;
                },
                (error) => { 
                    this.messageService.add({severity:'error', summary:'Statistiques par Annonceurs', detail:'Une erreur est survenue durant le filtrage !'});
                    this.showLoaderCampagnes = false;
                },
            );
    }

    setPagingDataCampagnes(resp){  
        this.tabCampagnes = resp.response.body;
        this.totalServerItemsCampagnes = resp.total;
        this.totalCurrentPageItemsCampagnes = resp.response.body.length;
        this.totalVolumeCampagnes = resp.totalVolume;
        this.totalPACampagnes = resp.totalPA;
        this.totalCACampagnes = resp.totalCA;
        this.totalMargeCampagnes = resp.totalMarge;
        this.totalVolumePartielCampagnes = resp.totalVolumePartiel;
        this.totalPAPartielCampagnes = resp.totalPAPartiel;
        this.totalCAPartielCampagnes = resp.totalCAPartiel;
        this.totalMargePartielCampagnes = resp.totalMargePartiel;
    }

    onPageChangeCampagnes(event){
        if(this.pagingOptionsCampagnes.currentPage != (event.page+1) || this.pagingOptionsCampagnes.pageSize != event.rows){
            this.pagingOptionsCampagnes.currentPage = (event.page+1);
            this.pagingOptionsCampagnes.pageSize = event.rows;
            this.getPagedDataAsyncCampagnes(this.pagingOptionsCampagnes.pageSize, this.pagingOptionsCampagnes.currentPage);
        }
    }

    getPagedDataAsyncCampagnes(pageSize, page) {
        this.showLoaderCampagnes = true;
        this.service
            .getPagedDataCampagnes(this.selectedBase.id, this.selectedAnnonceur.id, page, pageSize)
            .subscribe(
                (resp:any) => {
                    this.setPagingDataCampagnes(resp);
                    this.showLoaderCampagnes = false;
                },
                (error) => { 
                    this.showLoaderCampagnes = false;
                    this.messageService.add({severity:'error', summary:'Statistiques par Annonceurs', detail:'Une erreur est survenue durant la récupération des données !'});
                },
            );
    }

    onRowSelectCampagnes(event){
        this.dialogHeaderRouteurs = "Campagne : " + event.data.campagne.nom + " / Routeurs";
        this.reinitializeStatsForRouteurs();
        this.showDialogRouteurs = true;
        this.selectedCampagne = event.data.campagne;
        this.getPagedDataAsyncRouteurs(this.pagingOptionsRouteurs.pageSize, this.pagingOptionsRouteurs.currentPage)
    }


    //Pour les routeurs liés à la campagne liée à l'annonceur dans les résultats lié à la base sélectionnée
    reinitializeStatsForRouteurs(){
        this.tabRouteurs = [];
        this.totalCARouteurs = 0;
        this.totalCAPartielRouteurs = 0;
        this.totalMargeRouteurs = 0;
        this.totalMargePartielRouteurs = 0;
        this.totalPARouteurs = 0;
        this.totalPAPartielRouteurs = 0;
        this.totalVolumeRouteurs = 0;
        this.totalVolumePartielRouteurs = 0;
    }
    
    cbRouteurs() {
        return this.filter_dataRouteurs.filtre_date_debut.format('DD/MM/YYYY') + ' - ' + this.filter_dataRouteurs.filtre_date_fin.format('DD/MM/YYYY');
    }

    validerFiltreRouteurs(){
        this.showLoaderRouteurs = true;
        this.service
            .applyFilterRouteurs(this.selectedBase.id, this.selectedAnnonceur.id, this.selectedCampagne.id, this.filter_dataRouteurs, this.pagingOptionsRouteurs.currentPage, this.pagingOptionsRouteurs.pageSize)
            .subscribe(
                (resp:any) => {
                    this.setPagingDataRouteurs(resp);
                    this.messageService.add({severity:'success', summary:'Statistiques par Annonceurs', detail:'Filtrage effectué avec succès !'});
                    this.showLoaderRouteurs = false;
                },
                (error) => { 
                    this.messageService.add({severity:'error', summary:'Statistiques par Annonceurs', detail:'Une erreur est survenue durant le filtrage !'});
                    this.showLoaderRouteurs = false;
                },
            );
    }

    setPagingDataRouteurs(resp){  
        this.tabRouteurs = resp.response.body;
        this.totalServerItemsRouteurs = resp.total;
        this.totalCurrentPageItemsRouteurs = resp.response.body.length;
        this.totalVolumeRouteurs = resp.totalVolume;
        this.totalPARouteurs = resp.totalPA;
        this.totalCARouteurs = resp.totalCA;
        this.totalMargeRouteurs = resp.totalMarge;
        this.totalVolumePartielRouteurs = resp.totalVolumePartiel;
        this.totalPAPartielRouteurs = resp.totalPAPartiel;
        this.totalCAPartielRouteurs = resp.totalCAPartiel;
        this.totalMargePartielRouteurs = resp.totalMargePartiel;
    }

    onPageChangeRouteurs(event){
        if(this.pagingOptionsRouteurs.currentPage != (event.page+1) || this.pagingOptionsRouteurs.pageSize != event.rows){
            this.pagingOptionsRouteurs.currentPage = (event.page+1);
            this.pagingOptionsRouteurs.pageSize = event.rows;
            this.getPagedDataAsyncRouteurs(this.pagingOptionsRouteurs.pageSize, this.pagingOptionsRouteurs.currentPage);
        }
    }

    getPagedDataAsyncRouteurs(pageSize, page) {
        this.showLoaderRouteurs = true;
        this.service
            .getPagedDataRouteurs(this.selectedBase.id, this.selectedAnnonceur.id, this.selectedCampagne.id, page, pageSize)
            .subscribe(
                (resp:any) => {
                    this.setPagingDataRouteurs(resp);
                    this.showLoaderRouteurs = false;
                },
                (error) => { 
                    this.showLoaderRouteurs = false;
                    this.messageService.add({severity:'error', summary:'Statistiques par Annonceurs', detail:'Une erreur est survenue durant la récupération des données !'});
                },
            );
    }

}
