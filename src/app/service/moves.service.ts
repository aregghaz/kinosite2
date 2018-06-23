import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MovesService {
  constructor(private http: Http) {
  }

  getMoves() {
    return this.http.get('http://127.0.0.1:8000/newFilm')
      .map(function (response) {
        return response.json();
      })
      .map(response => response.data);
  }
}
