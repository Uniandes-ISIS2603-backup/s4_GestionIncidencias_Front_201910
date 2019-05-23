import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoEditComponent } from './empleado-edit.component';

/**
 * describe of the component in empleadoEditComponent
 */
describe('EmpleadoEditComponent', () => {
  let component: EmpleadoEditComponent;
  let fixture: ComponentFixture<EmpleadoEditComponent>;


  /** 
   * Compila los componentes de empleadoEditComponent
   */
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpleadoEditComponent ]
    })
    .compileComponents();
  }));
/**
 * Deteccion de los cambios realizados en EmpleadosEditComponent
 */
  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /**
   * component of empleadoEditComponent
   */
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
