import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class SingleSerialsService  {
  constructor(private  client: HttpClient) {
  }

  id;
  getSingleSerials() {
    return this.client.get('http://18.191.185.107/viewSerials?id=' + this.id)
      .map(function (response) {
        return response;
      })
      .map(response => response);
  }


}
