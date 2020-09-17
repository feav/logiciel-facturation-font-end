import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { DropdownModel } from '../model/dropdown-model';
import { CampagneService } from './service/campagne.service'

@Component({
    selector: 'app-campagne',
    templateUrl: './campagne.component.html',
    styleUrls: ['./campagne.component.scss']
})
export class CampagneComponent implements OnInit {

    showLoader: Boolean = true;
    showCreateCampagneModalForm: Boolean = false;
    createMode: Boolean = false;

    createCampagneFormGroup: FormGroup;

    campagnes = [];
    annonceurs: DropdownModel[] = [];
    cols: any[];

    selectedCampagne: any;

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

    constructor(public campagneService: CampagneService,
                private messageService: MessageService,
                private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.getPagedDataAsync(this.pagingOptions.pageSize, this.pagingOptions.currentPage, this.filterText);

        this.cols = [
            { field: 'nom', header: 'Nom' },
            { field: 'type_remuneration', header: 'Type de Rémunération' },
            { field: 'remuneration', header: 'Rémunération' },
            { field: 'annonceur', header: 'Annonceur' },
            { field: 'cree_le', header: 'Créée le' },
            { field: 'cree_par', header: 'Créée par' },
            { field: 'modifie_le', header: 'Modifiée le' },
            { field: 'modifie_par', header: 'Modifiée par' }
        ];

        this.createCampagneFormGroup = this.formBuilder.group({
            'id': new FormControl(null),
            'nom': new FormControl('', Validators.required ),
            'type_remuneration': new FormControl('', Validators.required ),
            'remuneration': new FormControl(null,  Validators.required),
            'annonceur': new FormControl(null,  Validators.required)
        });
    }

    showModalToAdd(){
        this.createMode = true;
        this.createCampagneFormGroup.reset();
        this.dialogHeader = "Ajouter une Campagne";
        this.annonceurs = [];
        this.campagneService
            .getAllAnnonceurs()
            .subscribe(
                (resp:any) => {
                    for(let annonceur of resp.body){
                        let dropdownModel = new DropdownModel();
                        dropdownModel.label = annonceur.nom;
                        dropdownModel.value = annonceur.id;
                        this.annonceurs.push(dropdownModel);
                    }
                    this.showCreateCampagneModalForm = true;
                },
                (error) => { }
            );
    }

    onRowSelect(event) {
        this.showLoader = true;
        this.createMode = false;
        this.dialogHeader = "Modifier la Campagne: "+event.data.nom;
        this.annonceurs = [];
        this.campagneService
            .getAllAnnonceurs()
            .subscribe(
                (resp:any) => {
                    for(let annonceur of resp.body){
                        let dropdownModel = new DropdownModel();
                        dropdownModel.label = annonceur.nom;
                        dropdownModel.value = annonceur.id;
                        this.annonceurs.push(dropdownModel);
                    }
                    this.createCampagneFormGroup.setValue({
                        id: event.data.id, 
                        nom: event.data.nom,
                        type_remuneration: event.data.type_remuneration,
                        remuneration: event.data.remuneration,
                        annonceur: event.data.annonceur.id
                    });
                    this.showLoader = false;
                    this.showCreateCampagneModalForm = true;
                },
                (error) => { }
            );
    }
      
    setPagingData(data){  
        this.campagnes = data.body;
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
            this.campagneService
                .getPagedDataBySearchText(pageSize, page, searchText)
                .subscribe(
                    (resp:any) => {
                        this.setPagingData(resp);
                        this.showLoader = false;
                    },
                    (error) => { 
                        this.showLoader = false;
                        this.messageService.add({severity:'error', summary:'Campagnes', detail:'Une erreur est survenue durant la récupération des données !'});

                    },
                );
        }else{
            this.campagneService
                .getPagedData(pageSize, page)
                .subscribe(
                    (resp:any) => {
                        this.setPagingData(resp);
                        this.showLoader = false;
                    },
                    (error) => { 
                        this.showLoader = false;
                        this.messageService.add({severity:'error', summary:'Campagnes', detail:'Une erreur est survenue durant la récupération des données !'});
                    },
                );
        }
    };

    createCampagne(){
        this.campagneService
            .create(this.createCampagneFormGroup.value)
            .subscribe(
                (resp:any) => {
                    this.getPagedDataAsync(this.pagingOptions.pageSize, this.pagingOptions.currentPage, this.filterText);
                    this.messageService.add({severity:'success', summary:'Campagnes', detail:'Campagne créée avec succès !'});
                    this.showCreateCampagneModalForm = false;
                    this.createCampagneFormGroup.reset();
                },
                (error) => { 
                    this.getPagedDataAsync(this.pagingOptions.pageSize, this.pagingOptions.currentPage, this.filterText);
                    this.messageService.add({severity:'error', summary:'Campagnes', detail:'Une erreur est survenue durant la création !'});
                },
            );
    }

    updateCampagne() {
        //console.log("updateCampagne"); console.log(this.createCampagneFormGroup.value);
        this.campagneService
            .update(this.createCampagneFormGroup.value.id, this.createCampagneFormGroup.value)
            .subscribe(
                (resp:any) => {
                    this.getPagedDataAsync(this.pagingOptions.pageSize, this.pagingOptions.currentPage, this.filterText);
                    this.messageService.add({severity:'success', summary:'Campagnes', detail:'Campagne modifiée avec succès !'});
                    this.showCreateCampagneModalForm = false;
                },
                (error) => { 
                    this.getPagedDataAsync(this.pagingOptions.pageSize, this.pagingOptions.currentPage, this.filterText);
                    this.messageService.add({severity:'error', summary:'Campagnes', detail:'Une erreur est survenue durant la mise à jour !'});
                },
            );
    };

    deleteCampagne() {
        this.campagneService
            .delete(this.createCampagneFormGroup.value.id)
            .subscribe(
                (resp:any) => {
                    this.getPagedDataAsync(this.pagingOptions.pageSize, this.pagingOptions.currentPage, this.filterText);
                    this.messageService.add({severity:'success', summary:'Campagnes', detail:'Campagne supprimée avec succès !'});
                    this.showCreateCampagneModalForm = false;
                },
                (error) => { 
                    this.getPagedDataAsync(this.pagingOptions.pageSize, this.pagingOptions.currentPage, this.filterText);
                    this.messageService.add({severity:'error', summary:'Campagnes', detail:'Une erreur est survenue durant la suppression !'});
                },
            );
    };

}
