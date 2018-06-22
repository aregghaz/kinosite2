import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SingleMoveService} from '../service/singleMove.service';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-single-moves',
  templateUrl: './single-moves.component.html',
  styleUrls: ['./single-moves.component.scss'],

})

export class SingleMovesComponent implements OnInit {
  film: any = {};
  id;


  constructor( private activeRoute: ActivatedRoute , private singl: SingleMoveService,private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      this.id = params[''];
      this.singl.id = this.id ;
    });
    this.singl.getSingleMoves().subscribe(films => {
      this.film = films;
    });
  }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
