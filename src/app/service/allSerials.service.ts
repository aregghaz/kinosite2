import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AllSerialsService {
  constructor(private  client: HttpClient) {
  }

  getAllSerilas() {
    return this.client.get('http://127.0.0.1:8000/serials')
      .map(function (response) {
        return response;
      })
      .map(response => response);
  }
}
