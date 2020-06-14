import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MessageService } from 'primeng/api';
import { StatistiquesParAnnonceursService } from './service/statistiques-par-annonceurs.service';
import * as moment from 'moment';
import * as $ from 'jquery';
import * as drp from 'src/assets/daterangepicker/daterangepicker';

var daterangepicker : any =  drp;

@Component({
    selector: 'app-statistiques-par-annonceurs',
    templateUrl: './statistiques-par-annonceurs.component.html',
    styleUrls: ['./statistiques-par-annonceurs.component.css']
})
export class StatistiquesParAnnonceursComponent implements OnInit {

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

    pagingOptions = {
        pageSizes: [15, 25, 50, 100],
        pageSize: 15,
        currentPage: 1,
        maxSize: 5
    };

    constructor(public service: StatistiquesParAnnonceursService,
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
        });

        this.getPagedDataAsync(this.pagingOptions.pageSize, this.pagingOptions.currentPage);

        this.cols = [
            { field: 'nom', header: 'Nom' },
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
        this.tab = resp.data.body;
        this.totalServerItems = resp.total;
        this.totalCurrentPageItems = resp.data.body.length;
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
}
