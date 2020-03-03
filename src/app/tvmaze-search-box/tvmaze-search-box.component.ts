import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import{FormControl, Validators} from '@angular/forms';
import { ITvMazeService } from '../itv-maze-service';
import {TvmazeService} from '../tvmaze.service'
import { from } from 'rxjs';
import { ITvMaze } from '../itv-maze';

@Component({
  selector: 'app-tvmaze-search-box',
  templateUrl: './tvmaze-search-box.component.html',
  styleUrls: ['./tvmaze-search-box.component.css']
})
export class TvmazeSearchBoxComponent implements OnInit {

  @Output() searchboxoutput= new EventEmitter<string>();

  
  search= new FormControl();
  constructor(private mazeservice:TvmazeService) { }
  

  ngOnInit():void{
    this.search.valueChanges.
    subscribe((searchValue:string) => 
    {
      if(!this.search.invalid && searchValue)
      {
        this.searchboxoutput.emit(searchValue);
        
        
      }
    }
    )
   }
}
