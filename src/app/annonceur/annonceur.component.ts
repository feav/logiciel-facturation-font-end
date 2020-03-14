import { Component, OnInit } from '@angular/core';
import { SelectItem, MessageService } from 'primeng/api';
import { AnnonceurService } from './service/annonceur.service'

@Component({
    selector: 'app-annonceur',
    templateUrl: './annonceur.component.html',
    styleUrls: ['./annonceur.component.css']
})
export class AnnonceurComponent implements OnInit {

    loading: Boolean = true;
    annonceurs = [];

    constructor(public annonceurService: AnnonceurService,
        private messageService: MessageService) { }

    ngOnInit() {

        this.annonceurService
            .lireTousLesAnnonceursPourStatistiques()
            .subscribe(
                (resp: any) => {
                    this.annonceurs = resp.body;
                    this.loading = false;
                },
                (error) => { this.loading = false; },
            );
    }

}
