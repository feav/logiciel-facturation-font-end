import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { MenuItem } from 'primeng/api';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { DropdownModel } from '../model/dropdown-model';
import { PlanningService } from './service/planning.service';
import * as moment from 'moment';
import * as $ from 'jquery';
import * as drp from 'src/assets/daterangepicker/daterangepicker';
import { DatePipe } from '@angular/common';
import { getLoggedUser } from 'src/environments/environment';

var daterangepicker : any =  drp;

@Component({
    selector: 'app-planning',
    templateUrl: './planning.component.html',
    styleUrls: ['./planning.component.css']
})
export class PlanningComponent implements OnInit {
    
    currentUser: any;

    showLoader: Boolean = true;
    showCreatePlanningModalForm: Boolean = false;
    createMode: Boolean = false;
    
    disabledMenuItems: MenuItem[];

    createPlanningFormGroup: FormGroup;

    plannings = [];
    cols: any[];
    routeurs = [];
    annonceurs = [];
    campagnesPourPlanning = [];
    basesPourPlanning = [];

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
        filtre_date_debut : moment().startOf('year'),
        filtre_date_fin : moment().endOf('month')
    };

    selectedPlanning: any;
    selectedDeletedPlanning: any;

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

    constructor(public planningService: PlanningService,
                private messageService: MessageService,
                private formBuilder: FormBuilder,
                public datepipe: DatePipe) { }

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

        this.currentUser = getLoggedUser();

        this.getPagedDataAsync(this.pagingOptions.pageSize, this.pagingOptions.currentPage, this.filterText);

        this.disabledMenuItems = [
            {
                label: 'Re-activer',
                icon: 'pi pi-fw pi-refresh',
                command: (event) => this.enablePlanning()
            },
            {
                label: 'Faire disparaître',
                icon: 'pi pi-fw pi-eye-slash',
                command: (event) => this.hidePlanning()
            }
        ];

        this.cols = [
            { field: 'date', header: "Date d'envoi" },
            { field: 'heure', header: "Heure d'envoi" },
            { field: 'nom_routeur', header: 'Routeur' },
            { field: 'nom_base', header: 'Base' },
            { field: 'nom_annonceur', header: 'Annonceur' },
            { field: 'nom_campagne', header: 'Campagne' },
            { field: 'volume', header: 'Volume' },
            { field: 'cree_le', header: 'Créé le' },
            { field: 'cree_par', header: 'Créé par' },
            { field: 'modifie_le', header: 'Modifié le' },
            { field: 'modifie_par', header: 'Modifié par' }
        ];

        this.createPlanningFormGroup = this.formBuilder.group({
            'id': new FormControl(null),
            'annonceur': new FormControl(null, Validators.required ),
            'campagne': new FormControl(null,  Validators.required),
            'routeur': new FormControl(null, Validators.required ),
            'base': new FormControl(null,  Validators.required),
            'volume': new FormControl(null, Validators.required ),
            'date_envoi': new FormControl(null,  Validators.required),
            'heure_envoi': new FormControl(null, Validators.required)
        });
    }

    cb() {
        return this.filter_data.filtre_date_debut.format('DD/MM/YYYY') + ' - ' + this.filter_data.filtre_date_fin.format('DD/MM/YYYY');
    }

    showModalToAdd(){
        this.showLoader = true;
        this.createMode = true;
        this.createPlanningFormGroup.reset();
        this.dialogHeader = "Planifier un envoi";
        this.createPlanningFormGroup.controls['campagne'].disable();
        this.createPlanningFormGroup.controls['base'].disable();
        this.annonceurs = [];
        this.routeurs = [];
        this.planningService
            .getAllRouteurs()
            .subscribe(
                (resp:any) => { 
                    for(let routeur of resp.body){
                        let dropdownModel = new DropdownModel();
                        dropdownModel.label = routeur.nom;
                        dropdownModel.value = routeur.id;
                        this.routeurs.push(dropdownModel);
                    }
                    this.planningService
                        .getAllAnnonceurs()
                        .subscribe(
                            (resp:any) => { 
                                for(let annonceur of resp.body){
                                    let dropdownModel = new DropdownModel();
                                    dropdownModel.label = annonceur.nom;
                                    dropdownModel.value = annonceur.id;
                                    this.annonceurs.push(dropdownModel);
                                }
                                this.showLoader = false;
                                this.showCreatePlanningModalForm = true;
                            },
                            (error) => {
                                this.messageService.add({severity:'error', summary:'Plannings', detail:'Une erreur est survenue durant la récupération des annonceurs !'});
                            }
                        );
                },
                (error) => {
                    this.messageService.add({severity:'error', summary:'Plannings', detail:'Une erreur est survenue durant la récupération des routeurs !'});
                }
            );
    }

    onRowSelect(event) {
        this.showLoader = true;
        this.createMode = false;
        this.dialogHeader = "Modifier / Supprimer ce Planning";
        this.annonceurs = [];
        this.routeurs = [];
        this.basesPourPlanning = [];
        this.campagnesPourPlanning = [];

        // this.createPlanningFormGroup.controls['campagne'].disable();
        // this.createPlanningFormGroup.controls['base'].disable();
        
        this.planningService
            .getAllRouteurs()
            .subscribe(
                (resp:any) => { 
                    for(let routeur of resp.body){
                        let dropdownModel = new DropdownModel();
                        dropdownModel.label = routeur.nom;
                        dropdownModel.value = routeur.id;
                        this.routeurs.push(dropdownModel);
                    }
                    this.planningService
                        .getAllAnnonceurs()
                        .subscribe(
                            (resp:any) => { 
                                for(let annonceur of resp.body){
                                    let dropdownModel = new DropdownModel();
                                    dropdownModel.label = annonceur.nom;
                                    dropdownModel.value = annonceur.id;
                                    this.annonceurs.push(dropdownModel);
                                }
                                this.planningService
                                    .getAllCampagnesForOneAnnonceur(event.data.annonceur.id)
                                    .subscribe(
                                        (resp:any) => {
                                            for(let campagne of resp.body){
                                                let dropdownModel = new DropdownModel();
                                                dropdownModel.label = campagne.nom;
                                                dropdownModel.value = campagne.id;
                                                this.campagnesPourPlanning.push(dropdownModel);
                                            }
                                            this.planningService
                                                .getAllBasesForOneRouteur(event.data.routeur.id)
                                                .subscribe(
                                                    (resp:any) => {
                                                        for(let base of resp.body){
                                                            let dropdownModel = new DropdownModel();
                                                            dropdownModel.label = base.nom;
                                                            dropdownModel.value = base.id;
                                                            this.basesPourPlanning.push(dropdownModel);
                                                        }
                                                        this.createPlanningFormGroup.setValue({
                                                            id: event.data.id,
                                                            annonceur: event.data.annonceur.id,
                                                            campagne: event.data.campagne.id,
                                                            routeur: event.data.routeur.id,
                                                            base: event.data.base.id,
                                                            volume: event.data.volume,
                                                            date_envoi: this.datepipe.transform(event.data.date, 'yyyy-dd-MM'),
                                                            heure_envoi: event.data.heure,
                                                        });
                                                        this.showCreatePlanningModalForm = true;
                                                        this.showLoader = false;
                                                    },
                                                    (error) => { 
                                                        this.messageService.add({severity:'error', summary:'Plannings', detail:'Une erreur est survenue durant la récupération des bases pour ce routeur !'});
                                                    },
                                                );
                                        },
                                        (error) => { 
                                            this.messageService.add({severity:'error', summary:'Plannings', detail:'Une erreur est survenue durant la récupération des campagnes pour cet annonceur !'});
                                        },
                                    );
                            },
                            (error) => {
                                this.messageService.add({severity:'error', summary:'Plannings', detail:'Une erreur est survenue durant la récupération des annonceurs !'});
                            }
                        );
                },
                (error) => {
                    this.messageService.add({severity:'error', summary:'Plannings', detail:'Une erreur est survenue durant la récupération des routeurs !'});
                }
            );
    }
      
    setPagingData(data){  
        this.plannings = data.body;
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
            this.planningService
                .getPagedDataBySearchText(pageSize, page, searchText)
                .subscribe(
                    (resp:any) => {
                        this.setPagingData(resp);
                        this.showLoader = false;
                    },
                    (error) => { 
                        this.showLoader = false;
                        this.messageService.add({severity:'error', summary:'Plannings', detail:'Une erreur est survenue durant la récupération des données !'});

                    },
                );
        }else{
            // this.planningService
            //     .getPagedData(pageSize, page)
            //     .subscribe(
            //         (resp:any) => {
            //             this.setPagingData(resp);
            //             this.showLoader = false;
            //         },
            //         (error) => { 
            //             this.showLoader = false;
            //             this.messageService.add({severity:'error', summary:'Plannings', detail:'Une erreur est survenue durant la récupération des données !'});
            //         },
            //     );
            this.validerFiltre();
        }
    }

    onAnnonceurChange(){
        this.campagnesPourPlanning = [];
        this.planningService
            .getAllCampagnesForOneAnnonceur(this.createPlanningFormGroup.value.annonceur)
            .subscribe(
                (resp:any) => {
                    for(let campagne of resp.body){
                        let dropdownModel = new DropdownModel();
                        dropdownModel.label = campagne.nom;
                        dropdownModel.value = campagne.id;
                        this.campagnesPourPlanning.push(dropdownModel);
                    }
                    this.createPlanningFormGroup.controls['campagne'].enable();
                },
                (error) => { 
                    this.messageService.add({severity:'error', summary:'Plannings', detail:'Une erreur est survenue durant la récupération des campagnes pour cet annonceur !'});
                },
            );
    }

    onRouteurChange(){
        this.basesPourPlanning = [];
        this.planningService
        .getAllBasesForOneRouteur(this.createPlanningFormGroup.value.routeur)
        .subscribe(
            (resp:any) => {
                for(let base of resp.body){
                    let dropdownModel = new DropdownModel();
                    dropdownModel.label = base.nom;
                    dropdownModel.value = base.id;
                    this.basesPourPlanning.push(dropdownModel);
                }
                this.createPlanningFormGroup.controls['base'].enable();
            },
            (error) => { 
                this.messageService.add({severity:'error', summary:'Plannings', detail:'Une erreur est survenue durant la récupération des bases pour ce routeur !'});
            },
        );
    }

    validerFiltre(){
        this.showLoader = true;
        this.planningService
        .applyFilter(this.filter_data, this.pagingOptions.pageSize, this.pagingOptions.currentPage)
        .subscribe(
            (resp:any) => {
                this.setPagingData(resp);
                this.showLoader = false;
            },
            (error) => {
                this.messageService.add({severity:'error', summary:'Plannings', detail:'Une erreur est survenue durant le filtrage !'});
                this.showLoader = false;
            }
        );
    }

    createPlanning(){
        this.planningService
            .create(this.createPlanningFormGroup.value)
            .subscribe(
                (resp:any) => {
                    this.getPagedDataAsync(this.pagingOptions.pageSize, this.pagingOptions.currentPage, this.filterText);
                    this.messageService.add({severity:'success', summary:'Plannings', detail:'Planning créé avec succès !'});
                    this.showCreatePlanningModalForm = false;
                    this.createPlanningFormGroup.reset();
                },
                (error) => { 
                    this.getPagedDataAsync(this.pagingOptions.pageSize, this.pagingOptions.currentPage, this.filterText);
                    this.messageService.add({severity:'error', summary:'Plannings', detail:'Une erreur est survenue durant la création !'});
                },
            );
    }

    updatePlanning() {
        //console.log("updatePlanning"); console.log(this.createPlanningFormGroup.value);
        this.planningService
            .update(this.createPlanningFormGroup.value.id, this.createPlanningFormGroup.value)
            .subscribe(
                (resp:any) => {
                    this.getPagedDataAsync(this.pagingOptions.pageSize, this.pagingOptions.currentPage, this.filterText);
                    this.messageService.add({severity:'success', summary:'Plannings', detail:'Planning modifié avec succès !'});
                    this.showCreatePlanningModalForm = false;
                },
                (error) => { 
                    this.getPagedDataAsync(this.pagingOptions.pageSize, this.pagingOptions.currentPage, this.filterText);
                    this.messageService.add({severity:'error', summary:'Plannings', detail:'Une erreur est survenue durant la mise à jour !'});
                },
            );
    }

    deletePlanning() {
        this.planningService
            .delete(this.createPlanningFormGroup.value.id)
            .subscribe(
                (resp:any) => {
                    this.getPagedDataAsync(this.pagingOptions.pageSize, this.pagingOptions.currentPage, this.filterText);
                    this.messageService.add({severity:'success', summary:'Plannings', detail:'Planning supprimé avec succès !'});
                    this.showCreatePlanningModalForm = false;
                },
                (error) => { 
                    this.getPagedDataAsync(this.pagingOptions.pageSize, this.pagingOptions.currentPage, this.filterText);
                    this.messageService.add({severity:'error', summary:'Plannings', detail:'Une erreur est survenue durant la suppression !'});
                },
            );
    }

    enablePlanning() {
        this.planningService
            .enable(this.selectedDeletedPlanning.id)
            .subscribe(
                (resp:any) => {
                    this.getPagedDataAsync(this.pagingOptions.pageSize, this.pagingOptions.currentPage, this.filterText);
                    this.messageService.add({severity:'success', summary:'Plannings', detail:'Planning activé avec succès !'});
                    this.showCreatePlanningModalForm = false;
                },
                (error) => { 
                    this.getPagedDataAsync(this.pagingOptions.pageSize, this.pagingOptions.currentPage, this.filterText);
                    this.messageService.add({severity:'error', summary:'Planning', detail:"Une erreur est survenue durant l'activation !"});
                },
            );
    };

    hidePlanning() {
        this.planningService
            .hide(this.selectedDeletedPlanning.id)
            .subscribe(
                (resp:any) => {
                    this.getPagedDataAsync(this.pagingOptions.pageSize, this.pagingOptions.currentPage, this.filterText);
                    this.messageService.add({severity:'success', summary:'Plannings', detail:'Planning caché avec succès !'});
                    this.showCreatePlanningModalForm = false;
                },
                (error) => { 
                    this.getPagedDataAsync(this.pagingOptions.pageSize, this.pagingOptions.currentPage, this.filterText);
                    this.messageService.add({severity:'error', summary:'Planning', detail:"Une erreur est survenue durant l'opération' !"});
                },
            );
    };
}
