import { TestBed } from '@angular/core/testing';

import { StatistiquesParCampagnesService } from './statistiques-par-campagnes.service';

describe('StatistiquesParCampagnesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StatistiquesParCampagnesService = TestBed.get(StatistiquesParCampagnesService);
    expect(service).toBeTruthy();
  });
});
