import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoDetailComponent } from './empleado-detail.component';

/**
 * describe of the component in empleado-detail
 */
describe('EmpleadoDetailComponent', () => {
  let component: EmpleadoDetailComponent;
  let fixture: ComponentFixture<EmpleadoDetailComponent>;

  /**
   * compilacion de los componentes de empleado-detail
   */
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpleadoDetailComponent ]
    })
    .compileComponents();
  }));


  /**
   * teccion de los cambios aplicados en los componetes de  empleado-detail 
   */
  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /**
   * component of empleado-deatil
   */
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
