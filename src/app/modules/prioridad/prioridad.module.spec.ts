import {PrioridadModule} from './prioridad.module';

describe('prioridadModule', () => {
    let prioridadModule: PrioridadModule;

    beforeEach(() => {
        prioridadModule = new PrioridadModule();
    });

    it('should create an instance', () => {
        expect(prioridadModule).toBeTruthy();
    });
});