import { TestBed } from '@angular/core/testing';

import { StatistiquesParAnnonceursService } from './statistiques-par-annonceurs.service';

describe('StatistiquesParAnnonceursService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StatistiquesParAnnonceursService = TestBed.get(StatistiquesParAnnonceursService);
    expect(service).toBeTruthy();
  });
});
