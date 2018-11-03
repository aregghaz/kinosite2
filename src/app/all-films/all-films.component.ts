import {Component, Injectable, Input, OnInit} from '@angular/core';
import {AllFilmsService} from '../service/allFilms.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';


@Injectable()
@Component({
  selector: 'app-all-films',
  templateUrl: './all-films.component.html',
  styleUrls: ['./all-films.component.scss']
})
export class AllFilmsComponent implements OnInit {

 films:any = [];
 films2: any = [];
  searhStr = '';

  maxSize = 5;
  returnedArray;
  constructor(private  allFilms: AllFilmsService ) { }

  ngOnInit() {
    this.allFilms.getAllMoves().subscribe(moves => {
      this.films = moves;

      this.returnedArray = this.films.slice(0, 10);
    });
  }



  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.films.slice(startItem, endItem);
  }
}
