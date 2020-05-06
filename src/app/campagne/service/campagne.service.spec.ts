import { TestBed } from '@angular/core/testing';

import { CampagneService } from './campagne.service';

describe('CampagneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CampagneService = TestBed.get(CampagneService);
    expect(service).toBeTruthy();
  });
});
