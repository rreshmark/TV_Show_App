import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TvmazeShowsearchComponent } from './tvmaze-showsearch/tvmaze-showsearch.component';

@NgModule({
  declarations: [
    AppComponent,
    TvmazeShowsearchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
