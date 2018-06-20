import {BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MovesComponent } from './moves/moves.component';
import {HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
import { SerialsComponent } from './serials/serials.component';
import {MovesService} from './service/moves.service';
import {SerialsService} from './service/serials.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule} from '@angular/router';
import { SingleSerialComponent } from './single-serial/single-serial.component';
import { SingleMovesComponent } from './single-moves/single-moves.component';
import {SingleSerialsService} from './service/singleSerial.service';
import {SingleMoveService} from './service/singleMove.service';

const routes = [
  {path: '', pathMatch: 'full', component: HomePageComponent},
  {path: 'serial/:',  component: SingleSerialComponent},
  {path: 'film/:',  component: SingleMovesComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    MovesComponent,
    SerialsComponent,
    HomePageComponent,
    SingleSerialComponent,
    SingleMovesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    MovesService,
    SerialsService,
    SingleSerialsService,
    SingleMoveService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
