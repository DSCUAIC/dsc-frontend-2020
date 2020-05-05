import { TestBed } from '@angular/core/testing';

import { NonAuthGuardService } from './nonauth-guard.service';

describe('NonauthGuardService', () => {
  let service: NonAuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NonAuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
