import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenciasMenuEmpleadoComponent } from './incidencias-menu-empleado.component';

describe('IncidenciasMenuEmpleadoComponent', () => {
  let component: IncidenciasMenuEmpleadoComponent;
  let fixture: ComponentFixture<IncidenciasMenuEmpleadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidenciasMenuEmpleadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidenciasMenuEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
