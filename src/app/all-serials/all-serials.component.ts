import {Component, OnInit} from '@angular/core';
import {AllSerialsService} from '../service/allSerials.service';
import {PageChangedEvent} from 'ngx-bootstrap';
import {CategoryService} from '../service/category.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-all-serials',
    templateUrl: './all-serials.component.html',
    styleUrls: ['./all-serials.component.scss']
})
export class AllSerialsComponent implements OnInit {

    serial: any = [];
    serial2: any = [];
    searhStr = '';
    categories: boolean;
    results;
    maxSize = 5;
    returnedArray;

    constructor(private  allSerials: AllSerialsService,
                private category: CategoryService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.categories = false;
        this.allSerials.getAllSerilas().subscribe(serials => {
            this.serial = serials;
            this.returnedArray = this.serial.slice(0, 8);
        });
        this.changeCategory();
    }

    pageChanged(event: PageChangedEvent): void {
        const startItem = (event.page - 1) * event.itemsPerPage;
        const endItem = event.page * event.itemsPerPage;
        if (this.categories) {
            this.results = this.serial2.slice(startItem, endItem);
        } else {
            this.returnedArray = this.serial.slice(startItem, endItem);
        }
    }

    changeCategory() {
        this.route.params.subscribe(params => {
            if (Object.keys(params).length > 0) {
                this.categories = true;
                this.category.getCategorySerial(params.category).subscribe(data => {
                    this.serial2 = data;
                    this.results = this.serial2.slice(0, 8);
                });
            } else {
                this.categories = false;
            }
        });
    }
}
