import { MenuEmpleadoModule } from './menu-empleado.module';
/**
 * describe los moulos del emnu empleado
 */
describe('MenuEmpleadoModule', () => {
  let menuEmpleadoModule: MenuEmpleadoModule;


  /**
   * menu modulo empleado
   */
  beforeEach(() => {
    menuEmpleadoModule = new MenuEmpleadoModule();
  });

  /**
   * modulo de menu empleado
   */
  it('should create an instance', () => {
    expect(menuEmpleadoModule).toBeTruthy();
  });
});
