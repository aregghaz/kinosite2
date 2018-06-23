import { Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SingleSerialsService} from '../service/singleSerial.service';
import { DomSanitizer} from '@angular/platform-browser';
@Component({
  selector: 'app-single-serial',
  templateUrl: './single-serial.component.html',
  styleUrls: ['./single-serial.component.scss']
})
export class SingleSerialComponent implements OnInit {
  serial: any = {};
  id;
  constructor( private activeRoute: ActivatedRoute , private moves: SingleSerialsService,private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
       this.id = params[''];
      this.moves.id = this.id ;
    });
    this.moves.getSingleSerials().subscribe(serials => {
       this.serial = serials;

    });
  }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
