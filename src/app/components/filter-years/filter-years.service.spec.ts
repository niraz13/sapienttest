import { TestBed } from '@angular/core/testing';

import { FilterYearsService } from './filter-years.service';

describe('FilterYearsService', () => {
  let service: FilterYearsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterYearsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
