import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvmazeShowsearchComponent } from './tvmaze-showsearch.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('TvmazeShowsearchComponent', () => {
  let component: TvmazeShowsearchComponent;
  let fixture: ComponentFixture<TvmazeShowsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ TvmazeShowsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvmazeShowsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
