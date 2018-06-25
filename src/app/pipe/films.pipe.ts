import {Pipe, PipeTransform} from '@angular/core';

@Pipe(
  {name: 'searchFilms'}
)
export class FilmsPipe implements PipeTransform {
  transform(films, value) {
    return films.filter(film => {
      return film.name.includes(value);
    });
  }
}
