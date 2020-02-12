import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvmazeShowsearchComponent } from './tvmaze-showsearch.component';

describe('TvmazeShowsearchComponent', () => {
  let component: TvmazeShowsearchComponent;
  let fixture: ComponentFixture<TvmazeShowsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
