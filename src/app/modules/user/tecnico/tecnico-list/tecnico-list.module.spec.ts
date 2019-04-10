import { TecnicoListModule } from './tecnico-list.module';

describe('TecnicoListModule', () => {
  let tecnicoListModule: TecnicoListModule;

  beforeEach(() => {
    tecnicoListModule = new TecnicoListModule();
  });

  it('should create an instance', () => {
    expect(tecnicoListModule).toBeTruthy();
  });
});
