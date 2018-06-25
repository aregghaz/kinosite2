import {Injectable} from '@angular/core';
import {Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class SerialsService {
  constructor(private http: Http , private  client: HttpClient) {
  }


  getSerials() {
   return this.client.get('http://127.0.0.1:8000/newSerials')
      .map(function (response) {
        return response;
      })
     .map(response => response);
  }
}
