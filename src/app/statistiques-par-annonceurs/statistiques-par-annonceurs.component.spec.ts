import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistiquesParAnnonceursComponent } from './statistiques-par-annonceurs.component';

describe('StatistiquesParAnnonceursComponent', () => {
  let component: StatistiquesParAnnonceursComponent;
  let fixture: ComponentFixture<StatistiquesParAnnonceursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatistiquesParAnnonceursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatistiquesParAnnonceursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
