import {Component, Injectable, OnInit, AfterViewInit} from '@angular/core';
import {AllFilmsService} from '../service/allFilms.service';
import {PageChangedEvent} from 'ngx-bootstrap/pagination';
import {CategoryService} from '../service/category.service';
import {ActivatedRoute} from '@angular/router';


@Injectable()
@Component({
    selector: 'app-all-films',
    templateUrl: './all-films.component.html',
    styleUrls: ['./all-films.component.scss']
})
export class AllFilmsComponent implements OnInit {

    films: any = [];
    films2: any = [];
    searhStr = '';

    categories: boolean;
    results;
    maxSize = 5;
    returnedArray;

    constructor(private  allFilms: AllFilmsService,
                private category: CategoryService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.categories = false;
        this.allFilms.getAllMoves().subscribe(moves => {
            this.films = moves;
            this.returnedArray = this.films.slice(0, 8);
        });
        this.changeCategory();
    }


    pageChanged(event: PageChangedEvent): void {
        const startItem = (event.page - 1) * event.itemsPerPage;
        const endItem = event.page * event.itemsPerPage;
        this.returnedArray = this.films.slice(startItem, endItem);
    }

    changeCategory() {
        this.route.params.subscribe(params => {
            if (Object.keys(params).length > 0) {
                 this.categories = true;
                this.category.getCategoryMoves(params.category).subscribe(data => {
                    this.films2 = data;
                    this.results = this.films2.slice(0, 8);
                });
            } else {
                this.categories = false;
            }
        });
    }

}
