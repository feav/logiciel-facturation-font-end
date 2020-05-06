import { TestBed } from '@angular/core/testing';

import { StatistiquesParRouteursService } from './statistiques-par-routeurs.service';

describe('StatistiquesParRouteursService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StatistiquesParRouteursService = TestBed.get(StatistiquesParRouteursService);
    expect(service).toBeTruthy();
  });
});
