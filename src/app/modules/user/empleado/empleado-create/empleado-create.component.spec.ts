import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoCreateComponent } from './empleado-create.component';

/**
 * creacion del componente empleado
 */
describe('EmpleadoCreateComponent', () => {
  let component: EmpleadoCreateComponent;
  let fixture: ComponentFixture<EmpleadoCreateComponent>;


  /**
   * compilacion de los componentes de empleado
   */
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpleadoCreateComponent ]
    })
    .compileComponents();
  }));


  /**
   * detección de cambios realizados sobre los componentes del empleado
   */
  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /**
   * componet of the empleado
   */
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
