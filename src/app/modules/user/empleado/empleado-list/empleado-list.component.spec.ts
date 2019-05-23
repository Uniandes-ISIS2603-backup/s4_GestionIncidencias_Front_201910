import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoListComponent } from './empleado-list.component';


/**
 * describe la lista de los componentes del empleado
 */
describe('EmpleadoListComponent', () => {
  let component: EmpleadoListComponent;
  let fixture: ComponentFixture<EmpleadoListComponent>;


  /**
   * compila los componentes de la lista del empleado
   */
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpleadoListComponent ]
    })
    .compileComponents();
  }));

  /**
   * deteccion de los cambios realizados en el la lista de componente del empleado
   */
  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /**
   * componente de la lista empleados.
   */
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
