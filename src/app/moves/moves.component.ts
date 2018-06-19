import {Component, Injectable, Input} from '@angular/core';

@Injectable()
@Component({
  selector: 'app-moves',
  templateUrl: './moves.component.html',
  styleUrls: ['./moves.component.scss']
})
export class MovesComponent {

  @Input() films;
}

