import { Component, OnInit } from '@angular/core';
import { ITvMaze } from '../itv-maze';
import { DummyserviceService } from '../dummyservice.service';

@Component({
  selector: 'app-tvmaze-showsearch',
  templateUrl: './tvmaze-showsearch.component.html',
  styleUrls: ['./tvmaze-showsearch.component.css']
})
export class TvmazeShowsearchComponent implements OnInit {
  current: ITvMaze
  constructor(private tvmazeService: TvmazeService) { 
 

  }

  ngOnInit() { 
    this.tvmazeService.getTvmazeshowsearch('girls').subscribe(data => this.current = data);
  }

}
