import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenciasEmpleadoComponent } from './incidencias-empleado.component';

describe('IncidenciasEmpleadoComponent', () => {
  let component: IncidenciasEmpleadoComponent;
  let fixture: ComponentFixture<IncidenciasEmpleadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidenciasEmpleadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidenciasEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
