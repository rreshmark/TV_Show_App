import { Component } from '@angular/core';
import { ITvMaze } from './itv-maze';
import { ITvMazeService } from './itv-maze-service';
import { TvmazeShowsearchComponent } from './tvmaze-showsearch/tvmaze-showsearch.component';
import { TvmazeService } from './tvmaze.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TV-app';

  Tvmazeshowresult:ITvMaze[];

  constructor(private tvmazeService:TvmazeService){}

  Dosearch(searchValue){
     const userinput=searchValue;

         this.tvmazeService.getTvmazeShowsearch(userinput).subscribe(
          data =>this.Tvmazeshowresult=data);
  }
}
