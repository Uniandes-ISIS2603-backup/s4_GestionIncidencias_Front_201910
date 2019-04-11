import {ActuacionModule} from './actuacion.module';

describe('BookModule', () => {
    let actuacionModule: ActuacionModule;

    beforeEach(() => {
        actuacionModule = new ActuacionModule();
    });

    it('should create an instance', () => {
        expect(actuacionModule).toBeTruthy();
    });
});