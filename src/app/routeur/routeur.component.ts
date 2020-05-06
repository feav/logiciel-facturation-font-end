import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { RouteurService } from './service/routeur.service';

@Component({
    selector: 'app-routeur',
    templateUrl: './routeur.component.html',
    styleUrls: ['./routeur.component.scss']
})
export class RouteurComponent implements OnInit {

    showLoader: Boolean = true;
    showCreateRouteurModalForm: Boolean = false;
    createMode: Boolean = false;

    createRouteurFormGroup: FormGroup;

    routeurs = [];
    cols: any[];

    selectedRouteur: any;

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

    constructor(public routeurService: RouteurService,
                private messageService: MessageService,
                private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.getPagedDataAsync(this.pagingOptions.pageSize, this.pagingOptions.currentPage, this.filterText);

        this.cols = [
            { field: 'nom', header: 'Nom' },
            { field: 'prix', header: 'Prix' },
            { field: 'cree_le', header: 'Créé le' },
            { field: 'cree_par', header: 'Créé par' },
            { field: 'modifie_le', header: 'Modifié le' },
            { field: 'modifie_par', header: 'Modifié par' }
        ];

        this.createRouteurFormGroup = this.formBuilder.group({
            'id': new FormControl(null),
            'nom': new FormControl('', Validators.required ),
            'prix': new FormControl(null,  Validators.required)
        });
    }

    showModalToAdd(){
        this.createMode = true;
        this.createRouteurFormGroup.reset();
        this.dialogHeader = "Ajouter un Routeur";
        this.showCreateRouteurModalForm = true;
    }

    onRowSelect(event) {
        this.createMode = false;
        this.dialogHeader = "Modifier le Routeur: "+event.data.nom;
        this.createRouteurFormGroup.setValue({id: event.data.id, nom: event.data.nom, prix: event.data.prix});
        this.showCreateRouteurModalForm = true;
    }
      
    setPagingData(data){  
        this.routeurs = data.body;
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
            this.routeurService
                .getPagedDataBySearchText(pageSize, page, searchText)
                .subscribe(
                    (resp:any) => {
                        this.setPagingData(resp);
                        this.showLoader = false;
                    },
                    (error) => { 
                        this.showLoader = false;
                        this.messageService.add({severity:'error', summary:'Routeurs', detail:'Une erreur est survenue durant la récupération des données !'});

                    },
                );
        }else{
            this.routeurService
                .getPagedData(pageSize, page)
                .subscribe(
                    (resp:any) => {
                        this.setPagingData(resp);
                        this.showLoader = false;
                    },
                    (error) => { 
                        this.showLoader = false;
                        this.messageService.add({severity:'error', summary:'Routeurs', detail:'Une erreur est survenue durant la récupération des données !'});
                    },
                );
        }
    };

    createRouteur(){
        this.routeurService
            .create(this.createRouteurFormGroup.value)
            .subscribe(
                (resp:any) => {
                    this.getPagedDataAsync(this.pagingOptions.pageSize, this.pagingOptions.currentPage, this.filterText);
                    this.messageService.add({severity:'success', summary:'Routeurs', detail:'Routeur créé avec succès !'});
                    this.showCreateRouteurModalForm = false;
                    this.createRouteurFormGroup.reset();
                },
                (error) => { 
                    this.getPagedDataAsync(this.pagingOptions.pageSize, this.pagingOptions.currentPage, this.filterText);
                    this.messageService.add({severity:'error', summary:'Routeurs', detail:'Une erreur est survenue durant la création !'});
                },
            );
    }

    updateRouteur() {
        //console.log("updateRouteur"); console.log(this.createRouteurFormGroup.value);
        this.routeurService
            .update(this.createRouteurFormGroup.value.id, this.createRouteurFormGroup.value)
            .subscribe(
                (resp:any) => {
                    this.getPagedDataAsync(this.pagingOptions.pageSize, this.pagingOptions.currentPage, this.filterText);
                    this.messageService.add({severity:'success', summary:'Routeurs', detail:'Routeur modifié avec succès !'});
                    this.showCreateRouteurModalForm = false;
                },
                (error) => { 
                    this.getPagedDataAsync(this.pagingOptions.pageSize, this.pagingOptions.currentPage, this.filterText);
                    this.messageService.add({severity:'error', summary:'Routeurs', detail:'Une erreur est survenue durant la mise à jour !'});
                },
            );
    };

    deleteRouteur() {
        this.routeurService
            .delete(this.createRouteurFormGroup.value.id)
            .subscribe(
                (resp:any) => {
                    this.getPagedDataAsync(this.pagingOptions.pageSize, this.pagingOptions.currentPage, this.filterText);
                    this.messageService.add({severity:'success', summary:'Routeurs', detail:'Routeur supprimé avec succès !'});
                    this.showCreateRouteurModalForm = false;
                },
                (error) => { 
                    this.getPagedDataAsync(this.pagingOptions.pageSize, this.pagingOptions.currentPage, this.filterText);
                    this.messageService.add({severity:'error', summary:'Routeurs', detail:'Une erreur est survenue durant la suppression !'});
                },
            );
    };
}
