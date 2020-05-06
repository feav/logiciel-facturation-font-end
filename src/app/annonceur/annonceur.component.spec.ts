import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnonceurComponent } from './annonceur.component';

describe('AnnonceurComponent', () => {
  let component: AnnonceurComponent;
  let fixture: ComponentFixture<AnnonceurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnonceurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnonceurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
