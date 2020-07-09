import { TestBed } from '@angular/core/testing';

import { PlatosDetailResolve } from './platos-detail.resolve';

describe('PlatosDetailResolve', () => {
  let service: PlatosDetailResolve;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlatosDetailResolve);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
