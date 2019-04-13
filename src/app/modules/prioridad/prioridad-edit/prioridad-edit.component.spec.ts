import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrioridadEditComponent } from './prioridad-edit.component';

describe('PrioridadEditComponent', () => {
  let component: PrioridadEditComponent;
  let fixture: ComponentFixture<PrioridadEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrioridadEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrioridadEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
