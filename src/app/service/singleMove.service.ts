import {Injectable} from '@angular/core';
import {Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class SingleMoveService  {
  constructor(private http: Http, private  client: HttpClient) {
  }
  id;
  getSingleMoves() {
    return this.client.get('http://127.0.0.1:8000/view?id=' + this.id)
      .map(function (response) {
        return response;
      })
      .map(response => response);
  }
}
