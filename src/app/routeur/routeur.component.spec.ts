import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteurComponent } from './routeur.component';

describe('RouteurComponent', () => {
  let component: RouteurComponent;
  let fixture: ComponentFixture<RouteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
