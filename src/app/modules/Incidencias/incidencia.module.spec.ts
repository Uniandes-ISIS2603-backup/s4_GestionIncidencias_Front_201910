import {IncidenciaModule} from './Incidencia.module';

describe('IncidenciaModule', () => {
    let incidenciaModule: IncidenciaModule;

    beforeEach(() => {
        incidenciaModule = new IncidenciaModule();
    });

    it('should create an instance', () => {
        expect(IncidenciaModule).toBeTruthy();
    });
});