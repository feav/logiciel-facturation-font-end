import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { AnnonceurService } from './service/annonceur.service';
import { ThemeOptions } from '../theme-options';

@Component({
    selector: 'app-annonceur',
    templateUrl: './annonceur.component.html',
    styleUrls: ['./annonceur.component.css']
})
export class AnnonceurComponent implements OnInit {

    showLoader: Boolean = true;
    showCreateAnnonceurModalForm: Boolean = false;
    createMode: Boolean = false;

    createAnnonceurFormGroup: FormGroup;

    annonceurs = [];
    cols: any[];

    selectedAnnonceur: any;

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

    constructor(public annonceurService: AnnonceurService,
                private messageService: MessageService,
                private formBuilder: FormBuilder,
                public globals: ThemeOptions) { }

    ngOnInit() {
        this.getPagedDataAsync(this.pagingOptions.pageSize, this.pagingOptions.currentPage, this.filterText);

        this.cols = [
            { field: 'nom', header: 'Nom' },
            { field: 'url', header: 'URL' },
            { field: 'login', header: 'Login' },
            { field: 'password', header: 'Mot de Passe' },
            { field: 'adresse_facturation', header: 'Adresse facturation' },
            { field: 'email_comptabilite', header: 'Email Comptabilité' },
            { field: 'email_direction', header: 'Email Direction' },
            { field: 'email_production', header: 'Email Production' },
            { field: 'delai_paiement', header: 'Délai Paiement' },
            { field: 'cree_le', header: 'Créé le' },
            { field: 'cree_par', header: 'Créé par' },
            { field: 'modifie_le', header: 'Modifié le' },
            { field: 'modifie_par', header: 'Modifié par' }
        ];

        this.createAnnonceurFormGroup = this.formBuilder.group({
            'id': new FormControl(null),
            'nom': new FormControl('', Validators.required ),
            'url': new FormControl('',  Validators.required),
            'login': new FormControl('', Validators.required ),
            'password': new FormControl('',  Validators.required),
            'adresse_facturation': new FormControl('', Validators.required ),
            'email_comptabilite': new FormControl('',  Validators.required),
            'email_direction': new FormControl('', Validators.required ),
            'email_production': new FormControl('',  Validators.required),
            'delai_paiement': new FormControl(null, Validators.required )
        });
    }

    showModalToAdd(){
        this.createMode = true;
        this.createAnnonceurFormGroup.reset();
        this.dialogHeader = "Ajouter un Annonceur";
        this.showCreateAnnonceurModalForm = true;
    }

    onRowSelect(event) {
        this.createMode = false;
        this.dialogHeader = "Modifier le Annonceur: "+event.data.nom;
        this.createAnnonceurFormGroup.setValue({
            id: event.data.id, 
            nom: event.data.nom, 
            url: event.data.url,
            login: event.data.login,
            password: event.data.password,
            adresse_facturation: event.data.adresse_facturation,
            email_comptabilite: event.data.email_comptabilite,
            email_direction: event.data.email_direction,
            email_production: event.data.email_production,
            delai_paiement: event.data.delai_paiement
        });
        this.showCreateAnnonceurModalForm = true;
    }
      
    setPagingData(data){  
        this.annonceurs = data.body;
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
            this.annonceurService
                .getPagedDataBySearchText(pageSize, page, searchText)
                .subscribe(
                    (resp:any) => {
                        this.setPagingData(resp);
                        this.showLoader = false;
                    },
                    (error) => { 
                        this.showLoader = false;
                        this.messageService.add({severity:'error', summary:'Annonceurs', detail:'Une erreur est survenue durant la récupération des données !'});

                    },
                );
        }else{
            this.annonceurService
                .getPagedData(pageSize, page)
                .subscribe(
                    (resp:any) => {
                        this.setPagingData(resp);
                        this.showLoader = false;
                    },
                    (error) => { 
                        this.showLoader = false;
                        this.messageService.add({severity:'error', summary:'Annonceurs', detail:'Une erreur est survenue durant la récupération des données !'});
                    },
                );
        }
    }

    createAnnonceur(){
        this.annonceurService
            .create(this.createAnnonceurFormGroup.value)
            .subscribe(
                (resp:any) => {
                    this.getPagedDataAsync(this.pagingOptions.pageSize, this.pagingOptions.currentPage, this.filterText);
                    this.messageService.add({severity:'success', summary:'Annonceurs', detail:'Annonceur créé avec succès !'});
                    this.showCreateAnnonceurModalForm = false;
                    this.createAnnonceurFormGroup.reset();
                },
                (error) => { 
                    this.getPagedDataAsync(this.pagingOptions.pageSize, this.pagingOptions.currentPage, this.filterText);
                    this.messageService.add({severity:'error', summary:'Annonceurs', detail:'Une erreur est survenue durant la création !'});
                },
            );
    }

    updateAnnonceur() {
        //console.log("updateAnnonceur"); console.log(this.createAnnonceurFormGroup.value);
        this.annonceurService
            .update(this.createAnnonceurFormGroup.value.id, this.createAnnonceurFormGroup.value)
            .subscribe(
                (resp:any) => {
                    this.getPagedDataAsync(this.pagingOptions.pageSize, this.pagingOptions.currentPage, this.filterText);
                    this.messageService.add({severity:'success', summary:'Annonceurs', detail:'Annonceur modifié avec succès !'});
                    this.showCreateAnnonceurModalForm = false;
                },
                (error) => { 
                    this.getPagedDataAsync(this.pagingOptions.pageSize, this.pagingOptions.currentPage, this.filterText);
                    this.messageService.add({severity:'error', summary:'Annonceurs', detail:'Une erreur est survenue durant la mise à jour !'});
                },
            );
    }

    deleteAnnonceur() {
        this.annonceurService
            .delete(this.createAnnonceurFormGroup.value.id)
            .subscribe(
                (resp:any) => {
                    this.getPagedDataAsync(this.pagingOptions.pageSize, this.pagingOptions.currentPage, this.filterText);
                    this.messageService.add({severity:'success', summary:'Annonceurs', detail:'Annonceur supprimé avec succès !'});
                    this.showCreateAnnonceurModalForm = false;
                },
                (error) => { 
                    this.getPagedDataAsync(this.pagingOptions.pageSize, this.pagingOptions.currentPage, this.filterText);
                    this.messageService.add({severity:'error', summary:'Annonceurs', detail:'Une erreur est survenue durant la suppression !'});
                },
            );
    }

}
