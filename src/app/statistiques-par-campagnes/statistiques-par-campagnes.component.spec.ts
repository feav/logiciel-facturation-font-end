import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistiquesParCampagnesComponent } from './statistiques-par-campagnes.component';

describe('StatistiquesParCampagnesComponent', () => {
  let component: StatistiquesParCampagnesComponent;
  let fixture: ComponentFixture<StatistiquesParCampagnesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatistiquesParCampagnesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatistiquesParCampagnesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
