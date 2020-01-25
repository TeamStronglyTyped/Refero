import { TestBed } from '@angular/core/testing';

import { NavValuesService } from './nav-values.service';

describe('NavValuesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavValuesService = TestBed.get(NavValuesService);
    expect(service).toBeTruthy();
  });
});
