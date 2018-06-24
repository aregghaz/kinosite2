import { Component, OnInit } from '@angular/core';
import {SerialsService} from '../service/serials.service';
import {MovesService} from '../service/moves.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  films = [];
  serial ;
  searhStr = '';
  returnedArray = [];
  constructor(private  movesService: MovesService, private serialsService: SerialsService) {}

  ngOnInit() {
    this.movesService.getMoves().subscribe(moves => {
      this.films = moves;
    });
    this.serialsService.getSerials().subscribe(serials => {
      this.serial = serials;
      this.returnedArray = this.serial.slice(0, 10);
    });
  }
  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.serial.slice(startItem, endItem);
  }
}
