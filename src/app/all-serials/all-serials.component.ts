import {Component, OnInit} from '@angular/core';
import {AllSerialsService} from '../service/allSerials.service';
import {PageChangedEvent} from 'ngx-bootstrap';

@Component({
    selector: 'app-all-serials',
    templateUrl: './all-serials.component.html',
    styleUrls: ['./all-serials.component.scss']
})
export class AllSerialsComponent implements OnInit {

    serial: any = [];
    searhStr = '';
    maxSize = 5;
    returnedArray;

    constructor(private  allSerials: AllSerialsService) {
    }

    ngOnInit() {
        this.allSerials.getAllSerilas().subscribe(serials => {
            this.serial = serials;
            this.returnedArray = this.serial.slice(0, 8);
        });
    }

    pageChanged(event: PageChangedEvent): void {
        const startItem = (event.page - 1) * event.itemsPerPage;
        const endItem = event.page * event.itemsPerPage;
        this.returnedArray = this.serial.slice(startItem, endItem);
    }
}
