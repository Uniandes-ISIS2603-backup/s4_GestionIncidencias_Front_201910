import { TecnicoDetailModule } from './tecnico-detail.module';

describe('TecnicoDetailModule', () => {
  let tecnicoDetailModule: TecnicoDetailModule;

  beforeEach(() => {
    tecnicoDetailModule = new TecnicoDetailModule();
  });

  it('should create an instance', () => {
    expect(tecnicoDetailModule).toBeTruthy();
  });
});
