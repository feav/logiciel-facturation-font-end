import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MenuItem, MessageService } from 'primeng/api';
import { API } from 'src/environments/environment';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    stats:any = {
        ca_journalier: 0,
        ca_hebdomadaire: 0,
        ca_mensuel: 0,
        ca_annuel: 0,
        volume_journalier: 0,
        volume_hebdomadaire: 0,
        volume_mensuel: 0,
        volume_annuel: 0
    };

    constructor(private messageService: MessageService,
                private httpClient: HttpClient) { }

    ngOnInit() {
        this.httpClient.get(`${API.STATS_FOR_DASHBOARD}`)
                        .subscribe(
                            (resp:any) => { this.stats = resp },
                            (error) => { this.messageService.add({severity:'error', summary:'Statistiques', detail:'Une erreur est survenue lors de la récupération des statistiques !'}); }
                        );
    }

}
