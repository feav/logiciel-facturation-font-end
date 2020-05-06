import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistiquesParRouteursComponent } from './statistiques-par-routeurs.component';

describe('StatistiquesParRouteursComponent', () => {
  let component: StatistiquesParRouteursComponent;
  let fixture: ComponentFixture<StatistiquesParRouteursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatistiquesParRouteursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatistiquesParRouteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
