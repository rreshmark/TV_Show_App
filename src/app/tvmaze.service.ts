import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ITvMazeData } from './itv-maze-data';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ITvMaze } from './itv-maze';
import { map } from 'rxjs/operators';
import { ITvMazeService } from './itv-maze-service';

@Injectable({
  providedIn: 'root'
})
export class TvmazeService implements ITvMazeService{

  constructor(private httpClient:HttpClient) { }

  getTvmazeShowsearch(name: string):Observable<ITvMaze[]>{
    var url:string= `${environment.baseUrl}api.tvmaze.com/search/shows?q=${name}&appid=${environment.appId}`;
    console.log("url is"+url);
    var receivedapidata=this.httpClient.get<ITvMazeData[]>(url);
   // console.log("api data is"+JSON.stringify(receivedapidata));
    return receivedapidata.pipe(map(data => this.transformtoItvmaze(data)));
    

  }

  private transformtoItvmaze(data:ITvMazeData[]) : ITvMaze[]{
    var temparray:ITvMaze[]=[];

    for(let apidata of data)
    {
      var transformeditvdataobj:ITvMaze={
        id: apidata.show.id,
        name: apidata.show.name,
        language: apidata.show.language,
        genre: apidata.show.genres,
        runtime: apidata.show.runtime,
        time: apidata.show.schedule.time,
        days: apidata.show.schedule.days,
        nwname: this.networkobj(apidata),
       // timezone: apidata.show.network.country.timezone,
        image: this.Imageobj(apidata)

      }
      temparray.push(transformeditvdataobj);
      console.log(transformeditvdataobj);

    }
    return temparray;
  }

  private Imageobj(apidata: ITvMazeData): string {
    if (apidata.show.image === null) {
      return "https://static.wixstatic.com/media/5d754d_0be61226df2c4f789ff5de4b0802e31b~mv2.png/v1/crop/x_121,y_0,w_469,h_512/fill/w_325,h_356,al_c,q_85,usm_0.66_1.00_0.01/Picture%20unavailable_PNG.webp";
    } else {
      return apidata.show.image.medium;
    }
  }

  private networkobj(apidata: ITvMazeData): string {
    if(apidata.show.network===null){
    return"no network provided";
     }
    else if (apidata.show.network.name === null){
        
        return"no network name provided";
        } 
    else {
          return apidata.show.network.name;
        }
      }

      // private timezoneobj(apidata:ITvMazeData):string{

      //   if(apidata.show.network=== null){
      //     return "network unavailable"
      //   }

      //   else if(apidata.show.network.country === null){
         
      //     return "country unavailable"

      //   }
      //   else if(apidata.show.network.country.timezone === null){
                
      //     return "timezone unavailable"
      //   }
      //   else{
      //         return apidata.show.network.country.timezone;
      //   }
      // }

}
