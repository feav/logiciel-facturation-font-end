import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { DropdownModel } from '../model/dropdown-model';
import { UserService } from './service/user.service';
import { ThemeOptions } from '../theme-options';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

    showLoader: Boolean = true;
    showCreateUserModalForm: Boolean = false;
    createMode: Boolean = false;

    createUserFormGroup: FormGroup;
    updateUserFormGroup: FormGroup;

    users = [];
    roles: DropdownModel[] = [];
    cols: any[];

    selectedUser: any;

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

    constructor(public userService: UserService,
                private messageService: MessageService,
                private formBuilder: FormBuilder,
                public globals: ThemeOptions) { }

    ngOnInit() {
        this.getPagedDataAsync(this.pagingOptions.pageSize, this.pagingOptions.currentPage, this.filterText);

        this.cols = [
            { field: 'nom', header: 'Nom' },
            { field: 'email', header: 'Adresse e-mail' },
            { field: 'role', header: 'Poste' },
            { field: 'cree_le', header: 'Créé le' },
            { field: 'cree_par', header: 'Créé par' },
            { field: 'modifie_le', header: 'Modifié le' },
            { field: 'modifie_par', header: 'Modifié par' }
        ];

        this.createUserFormGroup = this.formBuilder.group({
            'id': new FormControl(null),
            'name': new FormControl('', Validators.required),
            'email': new FormControl('',  [Validators.required, Validators.email]),
            'password': new FormControl('', Validators.required),
            'password2': new FormControl('', Validators.required),
            'role': new FormControl(null,  Validators.required)
        });

        this.updateUserFormGroup = this.formBuilder.group({
            'id': new FormControl(null),
            'name': new FormControl('', Validators.required),
            'email': new FormControl('',  [Validators.required, Validators.email]),
            'role': new FormControl(null,  Validators.required)
        });
    }

    showModalToAdd(){
        this.createMode = true;
        this.createUserFormGroup.reset();
        this.dialogHeader = "Ajouter un Utilisateur";
        this.roles = [];
        this.userService
            .getAllRoles()
            .subscribe(
                (resp:any) => {
                    for(let role of resp.body){
                        let dropdownModel = new DropdownModel();
                        dropdownModel.label = role.intitule;
                        dropdownModel.value = role.id;
                        this.roles.push(dropdownModel);
                    }
                    this.showCreateUserModalForm = true;
                },
                (error) => { }
            );
    }

    onRowSelect(event) {
        this.showLoader = true;
        this.createMode = false;
        this.dialogHeader = "Modifier l'Utilisateur: "+event.data.nom;
        this.roles = [];
        this.userService
            .getAllRoles()
            .subscribe(
                (resp:any) => {
                    for(let role of resp.body){
                        let dropdownModel = new DropdownModel();
                        dropdownModel.label = role.intitule;
                        dropdownModel.value = role.id;
                        this.roles.push(dropdownModel);
                    }
                    this.updateUserFormGroup.setValue({
                        id: event.data.id, 
                        name: event.data.nom, 
                        email: event.data.email,
                        role: event.data.role.id
                    });
                    this.showLoader = false;
                    this.showCreateUserModalForm = true;
                },
                (error) => { }
            );
    }
      
    setPagingData(data){  
        this.users = data.body;
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
            this.userService
                .getPagedDataBySearchText(pageSize, page, searchText)
                .subscribe(
                    (resp:any) => {
                        this.setPagingData(resp);
                        this.showLoader = false;
                    },
                    (error) => { 
                        this.showLoader = false;
                        this.messageService.add({severity:'error', summary:'Utilisateurs', detail:'Une erreur est survenue durant la récupération des données !'});

                    },
                );
        }else{
            this.userService
                .getPagedData(pageSize, page)
                .subscribe(
                    (resp:any) => {
                        this.setPagingData(resp);
                        this.showLoader = false;
                    },
                    (error) => { 
                        this.showLoader = false;
                        this.messageService.add({severity:'error', summary:'Utilisateurs', detail:'Une erreur est survenue durant la récupération des données !'});
                    },
                );
        }
    };

    createUser(){
        if(this.createUserFormGroup.value.password != this.createUserFormGroup.value.password2)
            this.messageService.add({severity:'warning', summary:'Utilisateurs', detail:'Les mots de passe entrés ne correspondent pas !'});
        else{
            this.userService
            .create(this.createUserFormGroup.value)
            .subscribe(
                (resp:any) => {
                    this.getPagedDataAsync(this.pagingOptions.pageSize, this.pagingOptions.currentPage, this.filterText);
                    this.messageService.add({severity:'success', summary:'Utilisateurs', detail:'Utilisateur créé avec succès !'});
                    this.showCreateUserModalForm = false;
                    this.createUserFormGroup.reset();
                },
                (error) => { 
                    this.getPagedDataAsync(this.pagingOptions.pageSize, this.pagingOptions.currentPage, this.filterText);
                    this.messageService.add({severity:'error', summary:'Utilisateurs', detail:'Une erreur est survenue durant la création !'});
                },
            );
        }
    }

    updateUser() {
        //console.log("updateUser"); console.log(this.createUserFormGroup.value);
        this.userService
            .update(this.updateUserFormGroup.value.id, this.updateUserFormGroup.value)
            .subscribe(
                (resp:any) => {
                    this.getPagedDataAsync(this.pagingOptions.pageSize, this.pagingOptions.currentPage, this.filterText);
                    this.messageService.add({severity:'success', summary:'Utilisateurs', detail:'Utilisateur modifié avec succès !'});
                    this.showCreateUserModalForm = false;
                },
                (error) => { 
                    this.getPagedDataAsync(this.pagingOptions.pageSize, this.pagingOptions.currentPage, this.filterText);
                    this.messageService.add({severity:'error', summary:'Utilisateurs', detail:'Une erreur est survenue durant la mise à jour !'});
                },
            );
    };

    deleteUser() {
        this.userService
            .delete(this.updateUserFormGroup.value.id)
            .subscribe(
                (resp:any) => {
                    this.getPagedDataAsync(this.pagingOptions.pageSize, this.pagingOptions.currentPage, this.filterText);
                    this.messageService.add({severity:'success', summary:'Utilisateurs', detail:'Utilisateur supprimé avec succès !'});
                    this.showCreateUserModalForm = false;
                },
                (error) => { 
                    this.getPagedDataAsync(this.pagingOptions.pageSize, this.pagingOptions.currentPage, this.filterText);
                    this.messageService.add({severity:'error', summary:'Utilisateurs', detail:'Une erreur est survenue durant la suppression !'});
                },
            );
    };

}
