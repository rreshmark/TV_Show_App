import { Injectable, ɵSWITCH_TEMPLATE_REF_FACTORY__POST_R3__ } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IDummyInterfaceData } from './idummy-interface-data';
import { environment } from 'src/environments/environment';
import { ITvMaze } from './itv-maze';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TvmazeShowsearchComponent } from './tvmaze-showsearch/tvmaze-showsearch.component';


@Injectable({
  providedIn: 'root'
})
export class DummyserviceService {
  tempArray: ITvMaze[] = []

  constructor(private httpDummyClient: HttpClient) { }

    getTVData(showname: string): Observable<ITvMaze[]> {
      
      return  this.httpDummyClient.get<IDummyInterfaceData[]>(
        `${environment.dummyUrl}/search/shows?q=${showname}`
      ).pipe(map(data => this.transformToITvMaze(data)))
    }
  private transformToITvMaze(xyzdata: IDummyInterfaceData[]): ITvMaze[] {
    
    console.log(xyzdata);
    var i: number = 0;

    for(let abc of xyzdata)
    {
    
      
      console.log(abc)

      this.tempArray[i]= {

        id: abc.show.id,
        name: abc.show.name,
        language: abc.show.language,
        genre: abc.show.genres,
        runtime: abc.show.runtime,
        time: abc.show.schedule.time,
        days: abc.show.schedule.days,
       }
       i++;

       console.log(i)
       console.log(this.tempArray[i]);

    }


    
    return this.tempArray;
    

}
   
}
