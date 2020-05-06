import { TestBed } from '@angular/core/testing';

import { RouteurService } from './routeur.service';

describe('RouteurService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RouteurService = TestBed.get(RouteurService);
    expect(service).toBeTruthy();
  });
});
