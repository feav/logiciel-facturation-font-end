import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import {Validators, FormControl, FormGroup, FormBuilder} from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { Router } from '@angular/router';
import { DropdownModel } from './model/dropdown-model';
import { Service } from './services/service.service'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    title = 'Logiciel de Statistiques';
    itemsMenu: MenuItem[];
    itemsMenuAdd: MenuItem[];

    afficherFormulaireAjouterRouteur: Boolean = false;
    afficherFormulaireAjouterBase: Boolean = false;
    afficherFormulaireAjouterAnnonceur: Boolean = false;
    afficherFormulaireAjouterCampagne: Boolean = false;
    afficherFormulaireProgrammerEnvoi: Boolean = false;

    ajouterRouteurFormGroup: FormGroup;
    ajouterBaseFormGroup: FormGroup;
    ajouterAnnonceurFormGroup: FormGroup;
    ajouterCampagneFormGroup: FormGroup;
    programmerEnvoiFormGroup: FormGroup;

    listeRouteurs:DropdownModel[] = [];
    listeAnnonceurs:DropdownModel[] = [];
    listeCampagnes:DropdownModel[] = [];
    listeBases:DropdownModel[] = [];

    regexForEmail = "/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/";
    regexForURL = "/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm";

    minDate: Date = new Date();

    constructor(private formBuilder: FormBuilder,
                private messageService: MessageService,
                public service: Service,
                public router: Router) {}

    ngOnInit() {

        this.itemsMenu = [
            { label: 'Tableau de Bord', icon: 'pi pi-fw pi-home', routerLink:'dashboard' },
            { label: 'Routeurs', icon: 'pi pi-fw pi-wifi', routerLink:'routeur' },
            { label: 'Annonceurs', icon: 'pi pi-fw pi-users', routerLink:'annonceur' },
            { label: 'Bases', icon: 'pi pi-fw pi-sort-amount-up-alt', routerLink:'base' },
            { label: 'Résultats Globaux', icon: 'pi pi-fw pi-calendar', routerLink:'resultat' },
            // { label: 'Campagnes', icon: 'pi pi-fw pi-tags', routerLink:'campagne' }
        ];

        this.itemsMenuAdd = [
            { label: 'Ajouter Base', icon: 'pi pi-fw pi-plus', command: () => { this.afficherFormulaireAjouterBase = true; } },
            { label: 'Ajouter Annonceur', icon: 'pi pi-fw pi-plus', command: () => { this.afficherFormulaireAjouterAnnonceur = true; } },
            { label: 'Ajouter Campagne', icon: 'pi pi-fw pi-plus', command: () => { this.afficherFormulaireAjouterCampagne = true; } },
            { label: 'Programmer envoi', icon: 'pi pi-fw pi-plus', command: () => { this.afficherFormulaireProgrammerEnvoi = true; } }
        ];

        this.ajouterRouteurFormGroup = this.formBuilder.group({
            'id': new FormControl(null),
            'nom': new FormControl('', Validators.required ),
            'prix': new FormControl(null,  Validators.required)
        });

        this.ajouterBaseFormGroup = this.formBuilder.group({
            'id': new FormControl(null),
            'nom': new FormControl('', Validators.required ),
            'routeur': new FormControl(null,  Validators.required)
        });
        
        this.ajouterAnnonceurFormGroup = this.formBuilder.group({
            'id': new FormControl(null),
            'nom': new FormControl('', Validators.required ),
            'url': new FormControl(''/*, Validators.pattern(this.regexForURL)*/ ),
            'adresse_facturation': new FormControl('', Validators.required),
            'email_comptabilite': new FormControl(''/*, Validators.compose([Validators.pattern(this.regexForEmail)])*/),
            'email_direction': new FormControl(''/*, Validators.compose([Validators.pattern(this.regexForEmail)])*/),
            'email_production': new FormControl(''/*, Validators.compose([Validators.pattern(this.regexForEmail)])*/),
            'delai_paiement': new FormControl('', Validators.required),
        });

        this.ajouterCampagneFormGroup = this.formBuilder.group({
            'id': new FormControl(null),
            'nom': new FormControl('', { validators : [Validators.required] } ),
            'type_remuneration': new FormControl('',{ validators : [Validators.required] } ),
            'remuneration': new FormControl(null, { validators : [Validators.required] } ),
            'annonceur': new FormControl(null, { validators : [Validators.required] } )
        });

        this.programmerEnvoiFormGroup =  this.formBuilder.group({
            'id': new FormControl(null),
            'annonceur': new FormControl(null, { validators : [Validators.required] } ),
            'campagne': new FormControl({value: null, disabled: true}, { validators : [Validators.required] } ),
            'routeur': new FormControl(null, { validators : [Validators.required] } ),
            'base': new FormControl({value: null, disabled: true}, { validators : [Validators.required] } ),
            'volume': new FormControl(null, { validators : [Validators.required] } ),
            'date_envoi': new FormControl(null, { validators : [Validators.required] } )
        });

        this.listeRouteurs = [ {label: 'Sélectionnez un Routeur', value: null} ];
        
        this.listeAnnonceurs = [ {label: 'Sélectionnez un Annonceur', value: null} ];

        this.listeCampagnes = [ {label: 'Sélectionnez une Campagne', value: null} ];
        
        this.listeBases = [ {label: 'Sélectionnez une Base', value: null} ];
    }

    ajouterRouteur(data){
        this.service
            .creerRouteur(data)
            .subscribe(
                (resp) => {
                    this.messageService.add({severity:'success', summary:'Routeur', detail:'Routeur créé avec succès !'});
                    this.fermerModal();
                    this.ajouterRouteurFormGroup.reset();
                },
                (error) => {
                    this.messageService.add({severity:'error', summary:'Erreur', detail:'Une erreur est survenue !'});
                }
            );
    }

    ajouterBase(data){
        this.service
            .creerBase(data)
            .subscribe(
                (resp) => {
                    this.messageService.add({severity:'success', summary:'Base', detail:'Base créée avec succès !'});
                    this.fermerModal();
                    this.ajouterBaseFormGroup.reset();
                    this.listeRouteurs = [ {label: 'Sélectionnez un Routeur', value: null} ];
                },
                (error) => {
                    this.messageService.add({severity:'error', summary:'Erreur', detail:'Une erreur est survenue !'});
                }
            );
    }

    ajouterAnnonceur(data){
        this.service
            .creerAnnonceur(data)
            .subscribe(
                (resp) => {
                    this.messageService.add({severity:'success', summary:'Annonceur', detail:'Annonceur créé avec succès !'});
                    this.fermerModal();
                    this.ajouterAnnonceurFormGroup.reset();
                },
                (error) => {
                    this.messageService.add({severity:'error', summary:'Erreur', detail:'Une erreur est survenue !'});
                }
            );
    }

    ajouterCampagne(data){
        this.service
            .creerCampagne(data)
            .subscribe(
                (resp) => {
                    this.messageService.add({severity:'success', summary:'Campagne', detail:'Campagne créée avec succès !'});
                    this.fermerModal();
                    this.ajouterCampagneFormGroup.reset();
                    this.listeAnnonceurs = [ {label: 'Sélectionnez un Annonceur', value: null} ];
                },
                (error) => {
                    this.messageService.add({severity:'error', summary:'Erreur', detail:'Une erreur est survenue !'});
                }
            );
    }

    programmerEnvoi(data){
        this.service
            .creerPlanning(data)
            .subscribe(
                (resp) => {
                    this.messageService.add({severity:'success', summary:'Planning', detail:'Planning créé avec succès !'});
                    this.fermerModal();
                    this.programmerEnvoiFormGroup.reset();
                    this.listeRouteurs = [ {label: 'Sélectionnez un Routeur', value: null} ];
                    this.listeAnnonceurs = [ {label: 'Sélectionnez un Annonceur', value: null} ];
                    this.listeCampagnes = [ {label: 'Sélectionnez une Campagne', value: null} ];
                    this.listeBases = [ {label: 'Sélectionnez une Base', value: null} ];
                },
                (error) => {
                    this.messageService.add({severity:'error', summary:'Erreur', detail:'Une erreur est survenue !'});
                }
            );
    }

    fermerModal(){
        this.afficherFormulaireAjouterRouteur = false;
        this.afficherFormulaireAjouterBase = false;
        this.afficherFormulaireAjouterAnnonceur = false;
        this.afficherFormulaireAjouterCampagne = false;
        this.afficherFormulaireProgrammerEnvoi = false;
    }

    onShowAjouterBaseDialog(){
        this.listeRouteurs = [ {label: 'Sélectionnez un Routeur', value: null} ];
        this.service
            .lireTousLesRouteurs()
            .subscribe(
                (resp:any) => {
                    for(let routeur of resp.body){
                        let dropdownModel = new DropdownModel();
                        dropdownModel.label = routeur.nom;
                        dropdownModel.value = routeur.id;
                        this.listeRouteurs.push(dropdownModel);
                    }
                },
                (error) => { }
            );
    }

    onShowAjouterCampagneDialog(){
        this.listeAnnonceurs = [ {label: 'Sélectionnez un Annonceur', value: null} ];
        this.service
            .lireTousLesAnnonceurs()
            .subscribe(
                (resp:any) => {
                    for(let annonceur of resp.body){
                        let dropdownModel = new DropdownModel();
                        dropdownModel.label = annonceur.nom;
                        dropdownModel.value = annonceur.id;
                        this.listeAnnonceurs.push(dropdownModel);
                    }
                },
                (error) => { }
            );
    }

    onShowProgrammerEnvoiDialog(){
        this.listeAnnonceurs = [ {label: 'Sélectionnez un Annonceur', value: null} ];
        this.listeRouteurs = [ {label: 'Sélectionnez un Routeur', value: null} ];
        this.service
            .lireTousLesAnnonceurs()
            .subscribe(
                (resp:any) => {
                    for(let annonceur of resp.body){
                        let dropdownModel = new DropdownModel();
                        dropdownModel.label = annonceur.nom;
                        dropdownModel.value = annonceur.id;
                        this.listeAnnonceurs.push(dropdownModel);
                    }
                },
                (error) => { }
            );
        this.service
            .lireTousLesRouteurs()
            .subscribe(
                (resp:any) => {
                    for(let routeur of resp.body){
                        let dropdownModel = new DropdownModel();
                        dropdownModel.label = routeur.nom;
                        dropdownModel.value = routeur.id;
                        this.listeRouteurs.push(dropdownModel);
                    }
                },
                (error) => { }
            );
    }

    onChangeAnnonceursDropdownValue(value){
        this.listeCampagnes = [ {label: 'Sélectionnez une Campagne', value: null} ];
        if(value == null)
            this.programmerEnvoiFormGroup.controls['campagne'].reset({value: null, disabled: true});
        else{
            this.programmerEnvoiFormGroup.controls['campagne'].reset({value: null, disabled: false})
            this.service
                .lireToutesLesCampagnesPourUnAnnonceur(value)
                .subscribe(
                    (resp:any) => {
                        for(let campagne of resp.body){
                            let dropdownModel = new DropdownModel();
                            dropdownModel.label = campagne.nom;
                            dropdownModel.value = campagne.id;
                            this.listeCampagnes.push(dropdownModel);
                        }
                    },
                    (error) => { }
                );
        }
    }

    onChangeRouteursDropdownValue(value){
        this.listeBases = [ {label: 'Sélectionnez une Base', value: null} ];
        if(value == null)
            this.programmerEnvoiFormGroup.controls['base'].reset({value: null, disabled: true});
        else{
            this.programmerEnvoiFormGroup.controls['base'].reset({value: null, disabled: false});
            this.service
                .lireToutesLesBasesPourUnRouteur(value)
                .subscribe(
                    (resp:any) => {
                        for(let routeur of resp.body){
                            let dropdownModel = new DropdownModel();
                            dropdownModel.label = routeur.nom;
                            dropdownModel.value = routeur.id;
                            this.listeBases.push(dropdownModel);
                        }
                    },
                    (error) => { }
                );
        }
    }

    logout(){

    }
}
