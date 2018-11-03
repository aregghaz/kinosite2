import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AllFilmsService {
  constructor(private  client: HttpClient) {
  }

  getAllMoves() {
    return this.client.get('http://18.191.185.107/allFilm')
      .map(function (response) {
        return response;
      })
      .map(response => response);
  }
}
