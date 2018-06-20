import { Component, OnInit } from '@angular/core';
import {SerialsService} from '../service/serials.service';
import {MovesService} from '../service/moves.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  films = [];
  serial ;

  constructor(private  movesService: MovesService, private serialsService: SerialsService) {}

  ngOnInit() {
    this.movesService.getMoves().subscribe(moves => {
      this.films = moves;
    });
    this.serialsService.getSerials().subscribe(serials => {
      this.serial = serials;
    });
  }
}
