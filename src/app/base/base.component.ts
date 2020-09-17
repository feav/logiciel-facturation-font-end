import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { DropdownModel } from '../model/dropdown-model';
import { BaseService } from './service/base.service'

@Component({
    selector: 'app-base',
    templateUrl: './base.component.html',
    styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

    showLoader: Boolean = true;
    showCreateBaseModalForm: Boolean = false;
    createMode: Boolean = false;

    createBaseFormGroup: FormGroup;

    bases = [];
    routeurs: DropdownModel[] = [];
    cols: any[];

    selectedBase: any;

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

    constructor(public baseService: BaseService,
                private messageService: MessageService,
                private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.getPagedDataAsync(this.pagingOptions.pageSize, this.pagingOptions.currentPage, this.filterText);

        this.cols = [
            { field: 'nom', header: 'Nom' },
            { field: 'nom_routeur', header: 'Routeur' },
            { field: 'cree_le', header: 'Créée le' },
            { field: 'cree_par', header: 'Créée par' },
            { field: 'modifie_le', header: 'Modifiée le' },
            { field: 'modifie_par', header: 'Modifiée par' }
        ];

        this.createBaseFormGroup = this.formBuilder.group({
            'id': new FormControl(null),
            'nom': new FormControl('', Validators.required ),
            'routeur': new FormControl(null,  Validators.required)
        });
    }

    showModalToAdd(){
        this.createMode = true;
        this.createBaseFormGroup.reset();
        this.dialogHeader = "Ajouter une Base";
        this.routeurs = [];
        this.baseService
            .getAllRouteurs()
            .subscribe(
                (resp:any) => {
                    for(let routeur of resp.body){
                        let dropdownModel = new DropdownModel();
                        dropdownModel.label = routeur.nom;
                        dropdownModel.value = routeur.id;
                        this.routeurs.push(dropdownModel);
                    }
                    this.showCreateBaseModalForm = true;
                },
                (error) => { }
            );
    }

    onRowSelect(event) {
        this.showLoader = true;
        this.createMode = false;
        this.dialogHeader = "Modifier la Base: "+event.data.nom;
        this.routeurs = [];
        this.baseService
            .getAllRouteurs()
            .subscribe(
                (resp:any) => {
                    for(let routeur of resp.body){
                        let dropdownModel = new DropdownModel();
                        dropdownModel.label = routeur.nom;
                        dropdownModel.value = routeur.id;
                        this.routeurs.push(dropdownModel);
                    }
                    this.createBaseFormGroup.setValue({
                        id: event.data.id, 
                        nom: event.data.nom, 
                        routeur: event.data.routeur.id
                    });
                    this.showLoader = false;
                    this.showCreateBaseModalForm = true;
                },
                (error) => { }
            );
    }
      
    setPagingData(data){  
        this.bases = data.body;
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
            this.baseService
                .getPagedDataBySearchText(pageSize, page, searchText)
                .subscribe(
                    (resp:any) => {
                        this.setPagingData(resp);
                        this.showLoader = false;
                    },
                    (error) => { 
                        this.showLoader = false;
                        this.messageService.add({severity:'error', summary:'Bases', detail:'Une erreur est survenue durant la récupération des données !'});

                    },
                );
        }else{
            this.baseService
                .getPagedData(pageSize, page)
                .subscribe(
                    (resp:any) => {
                        this.setPagingData(resp);
                        this.showLoader = false;
                    },
                    (error) => { 
                        this.showLoader = false;
                        this.messageService.add({severity:'error', summary:'Bases', detail:'Une erreur est survenue durant la récupération des données !'});
                    },
                );
        }
    };

    createBase(){
        this.baseService
            .create(this.createBaseFormGroup.value)
            .subscribe(
                (resp:any) => {
                    this.getPagedDataAsync(this.pagingOptions.pageSize, this.pagingOptions.currentPage, this.filterText);
                    this.messageService.add({severity:'success', summary:'Bases', detail:'Base créée avec succès !'});
                    this.showCreateBaseModalForm = false;
                    this.createBaseFormGroup.reset();
                },
                (error) => { 
                    this.getPagedDataAsync(this.pagingOptions.pageSize, this.pagingOptions.currentPage, this.filterText);
                    this.messageService.add({severity:'error', summary:'Bases', detail:'Une erreur est survenue durant la création !'});
                },
            );
    }

    updateBase() {
        //console.log("updateBase"); console.log(this.createBaseFormGroup.value);
        this.baseService
            .update(this.createBaseFormGroup.value.id, this.createBaseFormGroup.value)
            .subscribe(
                (resp:any) => {
                    this.getPagedDataAsync(this.pagingOptions.pageSize, this.pagingOptions.currentPage, this.filterText);
                    this.messageService.add({severity:'success', summary:'Bases', detail:'Base modifiée avec succès !'});
                    this.showCreateBaseModalForm = false;
                },
                (error) => { 
                    this.getPagedDataAsync(this.pagingOptions.pageSize, this.pagingOptions.currentPage, this.filterText);
                    this.messageService.add({severity:'error', summary:'Bases', detail:'Une erreur est survenue durant la mise à jour !'});
                },
            );
    };

    deleteBase() {
        this.baseService
            .delete(this.createBaseFormGroup.value.id)
            .subscribe(
                (resp:any) => {
                    this.getPagedDataAsync(this.pagingOptions.pageSize, this.pagingOptions.currentPage, this.filterText);
                    this.messageService.add({severity:'success', summary:'Bases', detail:'Base supprimée avec succès !'});
                    this.showCreateBaseModalForm = false;
                },
                (error) => { 
                    this.getPagedDataAsync(this.pagingOptions.pageSize, this.pagingOptions.currentPage, this.filterText);
                    this.messageService.add({severity:'error', summary:'Bases', detail:'Une erreur est survenue durant la suppression !'});
                },
            );
    };

}
