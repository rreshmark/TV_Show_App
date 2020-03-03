import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvmazeSearchBoxComponent } from './tvmaze-search-box.component';

describe('TvmazeSearchBoxComponent', () => {
  let component: TvmazeSearchBoxComponent;
  let fixture: ComponentFixture<TvmazeSearchBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvmazeSearchBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvmazeSearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
