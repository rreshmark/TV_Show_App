import { TestBed } from '@angular/core/testing';

import { TvmazeFakeService } from './tvmaze-fake.service';

describe('TvmazeFakeService', () => {
  let service: TvmazeFakeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TvmazeFakeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
