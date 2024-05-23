import { TestBed } from '@angular/core/testing';

import { UserfunctionService } from './userfunction.service';

describe('UserfunctionService', () => {
  let service: UserfunctionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserfunctionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
