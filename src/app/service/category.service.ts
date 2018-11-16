import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

    constructor( private  client: HttpClient) {
    }
    getCategoryMoves(genreFilm) {
        return this.client.get('http://18.191.185.107/changeCategory?category=' + genreFilm)
            .map(function (response) {
                return response;
            })
            .map(response => response);
    }
    getCategorySerial(genreSerial) {
        return this.client.get('http://18.191.185.107/changeCategorySerial?category=' + genreSerial)
            .map(function (response) {
                return response;
            })
            .map(response => response);
    }
}
