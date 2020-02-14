import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ITvMazeData } from './itv-maze-data';
import { environment } from 'src/environments/environment';
import { ITvMaze } from './itv-maze';
import {observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TvmazeService {

  constructor(private httpClient:HttpClient) { }

  getTvmazeShowsearch(name: string):observable<ITvMaze>{
    return this.httpClient.get<ITvMazeData>(
      `${environment.baseUrl}api.tvmaze.com/search/shows?q=${name}`
    ).pipe(map(data => this.tarnsformToITvMaze(data)));
  }

  private tarnsformToITvMaze( data:ITvMazeData): ITvMaze{
    return{
      id: data.show.id,
      name:data.show.name,
      language:data.show.language,
      genre:data.show.genres,
      runtime:data.show.runtime,
      time:data.show.schedule.time,
      days:data.show.schedule.days
    } 



  } 
}
