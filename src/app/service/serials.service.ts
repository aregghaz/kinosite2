import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class SerialsService {
  constructor(private  client: HttpClient) {
  }


  getSerials() {
   return this.client.get('http://18.191.185.107/newSerials')
      .map(function (response) {
        return response;
      })

  }
}
