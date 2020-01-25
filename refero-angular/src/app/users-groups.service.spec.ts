import { TestBed } from '@angular/core/testing';

import { UsersGroupsService } from './users-groups.service';

describe('UsersGroupsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsersGroupsService = TestBed.get(UsersGroupsService);
    expect(service).toBeTruthy();
  });
});
