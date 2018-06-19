import {Component, OnInit} from '@angular/core';
import {MovesService} from './service/moves.service';
import {SerialsService} from './service/serials.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent implements OnInit  {
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
