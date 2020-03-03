import { Injectable } from '@angular/core';
import { ITvMazeService } from './itv-maze-service';
import { ITvMaze } from './itv-maze';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TvmazeFakeService{
  // private faketvmaze: ITvMaze[]={
  //   id: 8410,
  //   name: 'powerpuff girls',
  //   language:'English' ,
  //   genre: ['Drama','comedy'],
  //   runtime: 30,
  //   time: '12:00',
  //   days: ['monday','thursday']
  }

  constructor(){}
  // public getTvmazeShowsearch(name:string):Observable<ITvMaze[]>{
  //   return of(this.faketvmaze);

  // }
}
