import { TestBed } from '@angular/core/testing';

import { AnnonceurService } from './annonceur.service';

describe('AnnonceurService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnnonceurService = TestBed.get(AnnonceurService);
    expect(service).toBeTruthy();
  });
});
