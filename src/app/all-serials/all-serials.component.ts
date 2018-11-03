import { Component, OnInit } from '@angular/core';
import {AllSerialsService} from '../service/allSerials.service';

@Component({
  selector: 'app-all-serials',
  templateUrl: './all-serials.component.html',
  styleUrls: ['./all-serials.component.scss']
})
export class AllSerialsComponent implements OnInit {

  serial: any = [];
  searhStr = '';

  constructor(private  allSerials: AllSerialsService ) { }

  ngOnInit() {
    this.allSerials.getAllSerilas().subscribe(serials => {
      this.serial = serials;
    });
  }

}
