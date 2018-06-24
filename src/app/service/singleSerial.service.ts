import {Injectable} from '@angular/core';
import {Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class SingleSerialsService  {
  constructor(private http: Http, private  client: HttpClient) {
  }

  id;
  // getSerials() {
  //   return this.client.get('http://127.0.0.1:8000/newSerials')
  //     .map(function (response) {
  //       return response.json();
  //     })
  //     .map(response => response.data);
  // }

  getSingleSerials() {
    return this.client.get('http://127.0.0.1:8000/viewSerials?id=' + this.id)
      .map(function (response) {
        return response;
      })
      .map(response => response);
  }


}
