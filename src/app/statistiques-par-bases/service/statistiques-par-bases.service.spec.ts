import { TestBed } from '@angular/core/testing';

import { StatistiquesParBasesService } from './statistiques-par-bases.service';

describe('StatistiquesParBasesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StatistiquesParBasesService = TestBed.get(StatistiquesParBasesService);
    expect(service).toBeTruthy();
  });
});
