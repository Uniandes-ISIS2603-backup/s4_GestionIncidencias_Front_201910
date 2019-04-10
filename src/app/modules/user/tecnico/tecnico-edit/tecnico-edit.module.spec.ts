import { TecnicoEditModule } from './tecnico-edit.module';

describe('TecnicoEditModule', () => {
  let tecnicoEditModule: TecnicoEditModule;

  beforeEach(() => {
    tecnicoEditModule = new TecnicoEditModule();
  });

  it('should create an instance', () => {
    expect(tecnicoEditModule).toBeTruthy();
  });
});
