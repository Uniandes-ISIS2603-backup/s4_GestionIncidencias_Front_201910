import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoMenuComponent } from './empleado-menu.component';

describe('EmpleadoMenuComponent', () => {
  let component: EmpleadoMenuComponent;
  let fixture: ComponentFixture<EmpleadoMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpleadoMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadoMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
