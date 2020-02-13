import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ITvMazeData } from './itv-maze-data';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TvmazeService {

  constructor(private httpClient:HttpClient) { }

  getTvmazeShowsearch(name: string){
    return this.httpClient.get<ITvMazeData>(
      `${environment.baseUrl}api.tvmaze.com/search/shows?q=${name}`
    )
  }
}
