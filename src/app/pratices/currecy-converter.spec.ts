import { TestBed } from '@angular/core/testing';

import { CurrecyConverter } from './currecy-converter';

describe('CurrecyConverter', () => {
  let service: CurrecyConverter;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrecyConverter);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
