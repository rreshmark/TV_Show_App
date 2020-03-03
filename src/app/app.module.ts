import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TvmazeShowsearchComponent } from './tvmaze-showsearch/tvmaze-showsearch.component';
import {TvmazeService} from './tvmaze.service';
import {HttpClientModule} from '@angular/common/http';
import 'hammerjs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TvmazeSearchBoxComponent } from './tvmaze-search-box/tvmaze-search-box.component';
@NgModule({
  declarations: [
    AppComponent,
    TvmazeShowsearchComponent,
    TvmazeSearchBoxComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TvmazeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
