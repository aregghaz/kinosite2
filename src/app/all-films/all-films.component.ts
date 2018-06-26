import {Component, Injectable, Input, OnInit} from '@angular/core';
import {AllFilmsService} from '../service/allFilms.service';


@Injectable()
@Component({
  selector: 'app-all-films',
  templateUrl: './all-films.component.html',
  styleUrls: ['./all-films.component.scss']
})
export class AllFilmsComponent implements OnInit {

 films:any =[];
  searhStr ='';

  constructor(private  allFilms: AllFilmsService ) { }

  ngOnInit() {
    this.allFilms.getAllMoves().subscribe(moves => {
      this.films = moves;
      console.log(this.films)
    });
  }

}
