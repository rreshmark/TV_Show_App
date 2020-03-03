import { Observable } from 'rxjs';
import { ITvMaze } from './itv-maze';

export interface ITvMazeService {
  getTvmazeShowsearch(name:string):Observable<ITvMaze[]>
}

