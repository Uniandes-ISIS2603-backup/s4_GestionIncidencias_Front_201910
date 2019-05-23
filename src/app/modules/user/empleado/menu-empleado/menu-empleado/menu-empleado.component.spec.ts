import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuEmpleadoComponent } from './menu-empleado.component';

/**
 * describe los componentes del menu empleado
 */
describe('MenuEmpleadoComponent', () => {
  let component: MenuEmpleadoComponent;
  let fixture: ComponentFixture<MenuEmpleadoComponent>;
/**
 * compilacion de los componentes del menu Empleado
 */
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuEmpleadoComponent ]
    })
    .compileComponents();
  }));

  /**
   * compilacion de los cambion en el menu empleado
   */
  beforeEach(() => {
    fixture = TestBed.createComponent(MenuEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /**
   * componente menu empleado
   */
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
