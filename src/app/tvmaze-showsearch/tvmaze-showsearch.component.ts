import { Component, OnInit } from '@angular/core';
import { ITvMaze } from '../itv-maze';

@Component({
  selector: 'app-tvmaze-showsearch',
  templateUrl: './tvmaze-showsearch.component.html',
  styleUrls: ['./tvmaze-showsearch.component.css']
})
export class TvmazeShowsearchComponent implements OnInit {
  current: ITvMaze[]
  constructor() { 
    this.current = [{
      id: 101,
      name: "Good Girls",
      language: "English",
      genre: ["Drama","Romance","Comedy"],
      runtime: 30,
      time: "22:00",
      days: ["Sunday","Monday"],
      nwname: "HBO",
      timezone: "America/PacificTime",
      image: "string"   

    },
    {
      id: 102,
      name: "Bad Girls",
      language: "English",
      genre: ["Thriller","Romance","Comedy"],
      runtime: 30,
      time: "23:00",
      days: ["Sunday","Monday","Tuesday"],
      nwname: "CNN",
      timezone: "America/PacificTime",
      image: "string"   

    }] as ITvMaze[]
    

  }

  ngOnInit(): void {
  }

}
