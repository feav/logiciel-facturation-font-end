import { Component, OnInit } from '@angular/core';
import { SelectItem, MessageService } from 'primeng/api';
import { BaseService } from './service/base.service'

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

    loading: Boolean = true;
    bases = [];

    constructor(public baseService: BaseService,
        private messageService: MessageService) { }

    ngOnInit() {

        this.baseService
            .lireToutesLesBasesPourStatistiques()
            .subscribe(
                (resp: any) => {
                    this.bases = resp.body;
                    this.loading = false;
                },
                (error) => { this.loading = false; },
            );
    }

}
