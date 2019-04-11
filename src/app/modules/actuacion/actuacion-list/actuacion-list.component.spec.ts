    
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {AppModule} from '../../../app.module';
import {ActuacionListComponent} from './actuacion-list.component';
import {AppRoutingModule} from '../../../app-routing/app-routing.module';
import {ActuacionService} from '../actuacion.service';
import {Actuacion} from '../actuacion';

describe('ActuacionListComponent', () => {
    let component: ActuacionListComponent;
    let fixture: ComponentFixture<ActuacionListComponent>;
    const actuaciones: Actuacion[] = require('../../../assets/books.json');

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppRoutingModule, HttpClientModule, AppModule],
            declarations: [],
            providers: [{provide: APP_BASE_HREF, useValue: ''}, ActuacionService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ActuacionListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    /**
     * Crea el componente
     */

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    /**
     * Verifica la lista de actuaciones
     */

    it('should have a list of actuaciones', () => {
        component.actuaciones = actuaciones;
        expect(component.actuaciones.length).toEqual(actuaciones.length);
    });

    /**
     * Verifica la cabeza y la cola de la lista de actuaciones para cmprobar que los
     * dos arreglos de actuaciones son iguales
     */
    it('a actuacion should be a actuacion (first and last)', () => {
        component.actuaciones = actuaciones;
        //revisar todas las atuaciones
        expect(component.actuaciones[0].fecha).toEqual(actuaciones[0].fecha);
        expect(component.actuaciones[actuaciones.length - 1].fecha).toEqual(actuaciones[actuaciones.length - 1].fecha);
    });
});