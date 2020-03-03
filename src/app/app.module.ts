import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TvmazeShowsearchComponent } from './tvmaze-showsearch/tvmaze-showsearch.component';
import {TvmazeService} from './tvmaze.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TvmazeShowsearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [TvmazeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
