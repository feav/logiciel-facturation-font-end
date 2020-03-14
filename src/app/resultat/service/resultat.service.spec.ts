import { TestBed } from '@angular/core/testing';

import { ResultatService } from './resultat.service';

describe('ResultatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResultatService = TestBed.get(ResultatService);
    expect(service).toBeTruthy();
  });
});
