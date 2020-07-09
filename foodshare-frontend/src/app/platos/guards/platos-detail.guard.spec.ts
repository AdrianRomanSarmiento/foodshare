import { TestBed } from '@angular/core/testing';

import { PlatosDetailGuard } from './platos-detail.guard';

describe('PlatosDetailGuard', () => {
  let guard: PlatosDetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PlatosDetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
