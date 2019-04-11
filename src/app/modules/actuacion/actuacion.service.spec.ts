import {ComponentFixture, TestBed, getTestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {Actuacion} from './actuacion';
import {ActuacionService} from './actuacion.service';
import {AppModule} from '../../app.module';



describe('Service: ActuacionService', () => {
    let injector: TestBed;
    let service: ActuacionService;
	const books: Actuacion[] = require('../../assets/actuaciones.json');

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule, AppModule],
            declarations: [],
            providers: [{provide: APP_BASE_HREF, useValue: ''}, ActuacionService]
        });
        injector = getTestBed();
        service = injector.get(ActuacionService);
    });

    it('#getActuaciones should return value from observable',
    (done: DoneFn) => {
    service.getActuaciones().subscribe(value => {
        expect(value.length).toBeGreaterThan(0);
        done();
        });
    });

    it('#createActuacion should return value from observable',
    (done: DoneFn) => {
   let actuacion:Actuacion = {fecha: "2017/01/06",descripcion:"Prueba", tipo : "Prueba" };
    service.createActuacion(actuacion).subscribe(value => {
        expect(value.fecha).toEqual(actuacion.fecha);
        done();
        });
    });
    it('#updateBook should return the book updated',
    (done: DoneFn) => {
	let actuacion:Actuacion  = {fecha: "2017/01/06",descripcion:"Prueba", tipo : "Prueba" };
    service.updateActuacion(actuacion).subscribe(value => {
        expect(value.fecha).toEqual(actuacion.fecha);
        done();
        });
    });
    
});