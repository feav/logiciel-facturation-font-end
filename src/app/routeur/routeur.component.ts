import { Component, OnInit } from '@angular/core';
import { SelectItem, MessageService } from 'primeng/api';
import { RouteurService } from './service/routeur.service'

@Component({
    selector: 'app-routeur',
    templateUrl: './routeur.component.html',
    styleUrls: ['./routeur.component.css']
})
export class RouteurComponent implements OnInit {

    loading: Boolean = true;
    routeurs = [];

    constructor(public routeurService: RouteurService,
                private messageService: MessageService) { }

    ngOnInit() {

        this.routeurService
            .lireTousLesRouteursPourStatistiques()
            .subscribe(
                (resp:any) => {
                    this.routeurs = resp.body;
                    this.loading = false;
                },
                (error) => { this.loading = false; },
            );
    }

}
