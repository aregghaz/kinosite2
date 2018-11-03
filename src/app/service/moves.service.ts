import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MovesService {
  constructor(private http: Http) {
  }

  getMoves() {
    return this.http.get('http://18.191.185.107/newFilm')
      .map(function (response) {
        return response.json();
      })
      .map(response => response.data);
  }
}
