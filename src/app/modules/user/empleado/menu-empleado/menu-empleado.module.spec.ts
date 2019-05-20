import { MenuEmpleadoModule } from './menu-empleado.module';

describe('MenuEmpleadoModule', () => {
  let menuEmpleadoModule: MenuEmpleadoModule;

  beforeEach(() => {
    menuEmpleadoModule = new MenuEmpleadoModule();
  });

  it('should create an instance', () => {
    expect(menuEmpleadoModule).toBeTruthy();
  });
});
