import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class MovesService {
  constructor(private  client: HttpClient) {
  }

  getMoves() {
    return this.client.get('http://18.191.185.107/newFilm')
      .map(function (response) {
        return response;
      })

  }
}
