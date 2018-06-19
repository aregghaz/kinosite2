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


@NgModule({
  declarations: [
    AppComponent,
    MovesComponent,
    SerialsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    MovesService,
    SerialsService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
