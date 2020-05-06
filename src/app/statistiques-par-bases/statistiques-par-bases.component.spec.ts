import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistiquesParBasesComponent } from './statistiques-par-bases.component';

describe('StatistiquesParBasesComponent', () => {
  let component: StatistiquesParBasesComponent;
  let fixture: ComponentFixture<StatistiquesParBasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatistiquesParBasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatistiquesParBasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
