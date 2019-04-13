import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrioridadDetailComponent } from './prioridad-detail.component';

describe('PrioridadDetailComponent', () => {
  let component: PrioridadDetailComponent;
  let fixture: ComponentFixture<PrioridadDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrioridadDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrioridadDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
