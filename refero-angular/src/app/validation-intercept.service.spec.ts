import { TestBed } from '@angular/core/testing';

import { ValidationInterceptService } from './validation-intercept.service';

describe('ValidationInterceptService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValidationInterceptService = TestBed.get(ValidationInterceptService);
    expect(service).toBeTruthy();
  });
});
