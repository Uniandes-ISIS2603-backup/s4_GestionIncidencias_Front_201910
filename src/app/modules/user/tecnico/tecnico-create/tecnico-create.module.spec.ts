import { TecnicoCreateModule } from './tecnico-create.module';

describe('TecnicoCreateModule', () => {
  let tecnicoCreateModule: TecnicoCreateModule;

  beforeEach(() => {
    tecnicoCreateModule = new TecnicoCreateModule();
  });

  it('should create an instance', () => {
    expect(tecnicoCreateModule).toBeTruthy();
  });
});
