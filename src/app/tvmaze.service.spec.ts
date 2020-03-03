import { TestBed } from '@angular/core/testing';

import { TvmazeService } from './tvmaze.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TvmazeService', () => {
  let service: TvmazeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(TvmazeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
