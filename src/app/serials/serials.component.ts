import {Component, Injectable, Input} from '@angular/core';

@Injectable()
@Component({
  selector: 'app-serials',
  templateUrl: './serials.component.html',
  styleUrls: ['./serials.component.scss']
})
export class SerialsComponent  {

  @Input() serial;
}
