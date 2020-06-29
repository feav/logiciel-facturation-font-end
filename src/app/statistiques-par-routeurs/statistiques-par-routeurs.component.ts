import { Component, OnInit } from '@angular/core';
import { MessageService, TreeNode } from 'primeng/api';
import { StatistiquesParRouteursService } from './service/statistiques-par-routeurs.service';
import * as moment from 'moment';
import * as $ from 'jquery';
import * as drp from 'src/assets/daterangepicker/daterangepicker';

var daterangepicker: any = drp;

@Component({
    selector: 'app-statistiques-par-routeurs',
    templateUrl: './statistiques-par-routeurs.component.html',
    styleUrls: ['./statistiques-par-routeurs.component.css']
})
export class StatistiquesParRouteursComponent implements OnInit {

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

    tab = [];
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


    //Pour les routeurs liés à la campagne liée à l'annonceur dans les résultats lié à la base sélectionnée
    pagingOptionsBases: any;
    showLoaderBases: Boolean = true;
    filter_dataBases: any = {
        filtre_date_debut : moment().subtract('days', 30),
        filtre_date_fin : moment()
    };
    showDialogBases: Boolean = false;
    tabBases: any[] = [];
    dialogHeaderBases: string;
    totalServerItemsBases = 0;
    totalCurrentPageItemsBases = 0;
    totalVolumeBases = 0;
    totalPABases = 0;
    totalCABases = 0;
    totalMargeBases = 0;
    totalVolumePartielBases = 0;
    totalPAPartielBases = 0;
    totalCAPartielBases = 0;
    totalMargePartielBases = 0;

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

    selectedRouteur: any;
    selectedBase: any;
    selectedAnnonceur: any;

    pagingOptions = this.pagingOptionsAnnonceurs = this.pagingOptionsCampagnes = this.pagingOptionsBases = {
        pageSizes: [15, 25, 50, 100],
        pageSize: 15,
        currentPage: 1,
        maxSize: 5
    };

    constructor(public service: StatistiquesParRouteursService,
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
            
            $('#reportrangeBases').daterangepicker({
                opens: 'center',
                locale: self.locale,
                startDate: self.filter_dataBases.filtre_date_debut,
                endDate: self.filter_dataBases.filtre_date_fin,
                ranges: self.ranges
            }, function(start, end, label) {
                self.filter_dataBases.filtre_date_debut = start;
                self.filter_dataBases.filtre_date_fin = end;
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
                    this.messageService.add({severity:'success', summary:'Statistiques par Bases', detail:'Filtrage effectué avec succès !'});
                    this.showLoader = false;
                },
                (error) => { 
                    this.messageService.add({severity:'error', summary:'Statistiques par Bases', detail:'Une erreur est survenue durant le filtrage !'});
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
                    this.messageService.add({severity:'error', summary:'Statistiques par Bases', detail:'Une erreur est survenue durant la récupération des données !'});
                },
            );
    }

    onRowSelect(event){
        //console.log(event);
        this.dialogHeaderBases = "Routeur : " + event.data.routeur.nom + " / Bases";
        this.selectedRouteur = event.data.routeur;
        this.reinitializeStatsForBases();
        this.showDialogBases = true;
        this.getPagedDataAsyncBases(this.pagingOptionsBases.pageSize, this.pagingOptionsBases.currentPage);
    }


    //Pour les routeurs liés à la campagne liée à l'annonceur dans les résultats lié à la base sélectionnée
    reinitializeStatsForBases(){
        this.tabBases = [];
        this.totalCABases = 0;
        this.totalCAPartielBases = 0;
        this.totalMargeBases = 0;
        this.totalMargePartielBases = 0;
        this.totalPABases = 0;
        this.totalPAPartielBases = 0;
        this.totalVolumeBases = 0;
        this.totalVolumePartielBases = 0;
    }
    
    cbBases() {
        return this.filter_dataBases.filtre_date_debut.format('DD/MM/YYYY') + ' - ' + this.filter_dataBases.filtre_date_fin.format('DD/MM/YYYY');
    }

    validerFiltreBases(){
        this.showLoaderBases = true;
        this.service
            .applyFilterBases(this.selectedRouteur.id, this.filter_dataBases, this.pagingOptionsBases.currentPage, this.pagingOptionsBases.pageSize)
            .subscribe(
                (resp:any) => {
                    this.setPagingDataBases(resp);
                    this.messageService.add({severity:'success', summary:'Statistiques par Annonceurs', detail:'Filtrage effectué avec succès !'});
                    this.showLoaderBases = false;
                },
                (error) => { 
                    this.messageService.add({severity:'error', summary:'Statistiques par Annonceurs', detail:'Une erreur est survenue durant le filtrage !'});
                    this.showLoaderBases = false;
                },
            );
    }

    setPagingDataBases(resp){  
        this.tabBases = resp.response.body;
        this.totalServerItemsBases = resp.total;
        this.totalCurrentPageItemsBases = resp.response.body.length;
        this.totalVolumeBases = resp.totalVolume;
        this.totalPABases = resp.totalPA;
        this.totalCABases = resp.totalCA;
        this.totalMargeBases = resp.totalMarge;
        this.totalVolumePartielBases = resp.totalVolumePartiel;
        this.totalPAPartielBases = resp.totalPAPartiel;
        this.totalCAPartielBases = resp.totalCAPartiel;
        this.totalMargePartielBases = resp.totalMargePartiel;
    }

    onPageChangeBases(event){
        if(this.pagingOptionsBases.currentPage != (event.page+1) || this.pagingOptionsBases.pageSize != event.rows){
            this.pagingOptionsBases.currentPage = (event.page+1);
            this.pagingOptionsBases.pageSize = event.rows;
            this.getPagedDataAsyncBases(this.pagingOptionsBases.pageSize, this.pagingOptionsBases.currentPage);
        }
    }

    getPagedDataAsyncBases(pageSize, page) {
        this.showLoaderBases = true;
        this.service
            .getPagedDataBases(this.selectedRouteur.id, page, pageSize)
            .subscribe(
                (resp:any) => {
                    this.setPagingDataBases(resp);
                    this.showLoaderBases = false;
                },
                (error) => { 
                    this.showLoaderBases = false;
                    this.messageService.add({severity:'error', summary:'Statistiques par Annonceurs', detail:'Une erreur est survenue durant la récupération des données !'});
                },
            );
    }

    onRowSelectBases(event){
        this.dialogHeaderAnnonceurs = "Base : " + event.data.base.nom + " / Annonceurs";
        this.reinitializeStatsForAnnonceurs();
        this.showDialogAnnonceurs = true;
        this.selectedBase = event.data.base;
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
            .applyFilterAnnonceurs(this.selectedRouteur.id, this.selectedBase.id, this.filter_dataAnnonceurs, this.pagingOptionsAnnonceurs.currentPage, this.pagingOptionsAnnonceurs.pageSize)
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
            .getPagedDataAnnonceurs(this.selectedRouteur.id, this.selectedBase.id, page, pageSize)
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
            .applyFilterCampagnes(this.selectedRouteur.id, this.selectedBase.id, this.selectedAnnonceur.id, this.filter_dataCampagnes, this.pagingOptionsCampagnes.currentPage, this.pagingOptionsCampagnes.pageSize)
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
            .getPagedDataCampagnes(this.selectedRouteur.id, this.selectedBase.id, this.selectedAnnonceur.id, page, pageSize)
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

}
