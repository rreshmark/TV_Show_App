import { Component, OnInit, Input } from '@angular/core';
import { ITvMaze } from '../itv-maze';
import { TvmazeService } from '../tvmaze.service';
import { ITvMazeService } from '../itv-maze-service';

@Component({
  selector: 'app-tvmaze-showsearch',
  templateUrl: './tvmaze-showsearch.component.html',
  styleUrls: ['./tvmaze-showsearch.component.css']
})
export class TvmazeShowsearchComponent implements OnInit {
  @Input() current: ITvMaze[]
 // searchValue:string | number 
      
  constructor(private tvmazeService: TvmazeService) { 
    
    

  }

  ngOnInit(){
    // this.tvmazeService.getTvmazeShowsearch('girls').subscribe(data => this.current = data);
  
  }

}
