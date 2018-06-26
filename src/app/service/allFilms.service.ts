import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AllFilmsService {
  constructor(private  client: HttpClient) {
  }

  getAllMoves() {
    return this.client.get('http://127.0.0.1:8000/allFilm')
      .map(function (response) {
        return response;
      })
      .map(response => response);
  }
}
