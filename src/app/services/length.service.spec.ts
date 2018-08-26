import { TestBed, inject } from '@angular/core/testing';

import { LengthService } from './length.service';

describe('LengthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LengthService]
    });
  });

  it('should be created', inject([LengthService], (service: LengthService) => {
    expect(service).toBeTruthy();
  }));
});
