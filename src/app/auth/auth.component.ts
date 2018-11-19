import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    register(value) {
        console.log(value);
    }

}
