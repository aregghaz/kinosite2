import { Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SingleSerialsService} from '../service/singleSerial.service';

@Component({
  selector: 'app-single-serial',
  templateUrl: './single-serial.component.html',
  styleUrls: ['./single-serial.component.css']
})
export class SingleSerialComponent implements OnInit {
  serial = {};
  id;
  constructor( private activeRoute: ActivatedRoute , private moves: SingleSerialsService) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
       this.id = params[''];
      this.moves.id = this.id ;
    });
    this.moves.getSingleSerials().subscribe(serials => {
       this.serial = serials;
       console.log(this.serial);
    });
  }
}
