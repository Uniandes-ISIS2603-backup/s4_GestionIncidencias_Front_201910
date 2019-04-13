import {ComponentFixture, TestBed, getTestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {Prioridad} from './prioridad';
import {PrioridadService} from './prioridad.service';
import {AppModule} from '../../app.module';



describe('Service: PrioridadService', () => {
    let injector: TestBed;
    let service: PrioridadService;
	const prioridades: Prioridad[] = require('../../assets/prioridad.json');

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule, AppModule],
            declarations: [],
            providers: [{provide: APP_BASE_HREF, useValue: ''}, PrioridadService]
        });
        injector = getTestBed();
        service = injector.get(PrioridadService);
    });

    it('#getPrioridades should return value from observable',
    (done: DoneFn) => {
    service.getPrioridades().subscribe(value => {
        expect(value.length).toBeGreaterThan(0);
        done();
        });
    });

    it('#createPrioridad should return value from observable',
    (done: DoneFn) => {
   let prioridad:Prioridad = { id : "Prueba" };
    service.createPrioridad(prioridades).subscribe(value => {
        expect(value.tipoPrioridad).toEqual(prioridad.tipoPrioridad);
        done();
        });
    });
    it('#updatePriority should return the priority updated',
    (done: DoneFn) => {
	let prioridad:Prioridad  = { tipoPrioridad : "Prueba" };
    service.updatePrioridad(prioridad).subscribe(value => {
        expect(value.tipoPrioridad).toEqual(prioridad.tipoPrioridad);
        done();
        });
    });
    
});