import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {MovesService} from './service/moves.service';
import {SerialsService} from './service/serials.service';
import {CategoryService} from './service/category.service';
import {AllFilmsService} from './service/allFilms.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],

})
export class AppComponent implements OnInit {
    constructor(private category: CategoryService,
                private film: AllFilmsService,
                ) {

    }

    categores = [
        'Биография',
        'Боевик',
        'Вестерн',
        'Военный',
        'Детектив',
        'Детские',
        'Документальный',
        'Драма',
        'Исторический',
        'Комедия',
        'Криминал',
        'Мелодрама',
        'Мультфильм',
        'Мюзикл',
        'Отечественные',
        'Приключения',
        'Семейный',
        'Трагикомедия',
        'Триллер',
        'Ужас',
        'Фантастика',
        'Фэнтези',
    ];

    ngOnInit() {
    }

}
