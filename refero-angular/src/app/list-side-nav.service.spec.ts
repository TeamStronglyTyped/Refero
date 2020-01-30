import { TestBed } from '@angular/core/testing';

import { ListSideNavService } from './list-side-nav.service';

describe('ListSideNavService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListSideNavService = TestBed.get(ListSideNavService);
    expect(service).toBeTruthy();
  });
});
