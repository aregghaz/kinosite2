import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CategoryFilmsService {
  constructor(private  client: HttpClient) {
  }

  getAllSerilas() {
    return this.client.get('http://18.191.185.107/serials')
      .map(function (response) {
        return response;
      })
      .map(response => response);
  }
}
