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
    ).pipe(map(dummydata => this.tarnsformToITvMaze(dummydata)));
  }

  private tarnsformToITvMaze( dummydata:ITvMazeData): ITvMaze{
    return{
      id: dummydata.show.id,
      name:dummydata.show.name,
      language:dummydata.show.language,
      genre:dummydata.show.genres,
      runtime:dummydata.show.runtime,
      time:dummydata.show.schedule.time,
      days:dummydata.show.schedule.days
    } 



  } 
}
