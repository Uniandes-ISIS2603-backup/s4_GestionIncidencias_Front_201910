import { EmpleadoModule } from './empleado.module';
import 'jasmine'

describe('EmpleadoModule', () => {
  let empleadoModule: EmpleadoModule;

  beforeEach(() => {
    empleadoModule = new EmpleadoModule();
  });

  it('should create an instance', () => {
    expect(empleadoModule).toBeTruthy();
  });
});
