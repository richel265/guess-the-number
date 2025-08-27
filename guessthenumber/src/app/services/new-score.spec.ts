import { TestBed } from '@angular/core/testing';

import { NewScore } from './new-score';

describe('NewScore', () => {
  let service: NewScore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewScore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
