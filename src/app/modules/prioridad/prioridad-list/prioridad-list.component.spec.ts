    
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {AppModule} from '../../../app.module';
import {PrioridadListComponent} from './prioridad-list.component';
import {AppRoutingModule} from '../../../app-routing/app-routing.module';
import {PrioridadService} from '../prioridad.service';
import {Prioridad} from '../prioridad';

describe('PrioridadListComponent', () => {
    let component: PrioridadListComponent;
    let fixture: ComponentFixture<PrioridadListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppRoutingModule, HttpClientModule, AppModule],
            declarations: [],
            providers: [{provide: APP_BASE_HREF, useValue: ''},PrioridadService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PrioridadListComponent);
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
     * Verifica la lista de Prioridades
     */

    it('should have a list of prioridades', () => {
        component.prioridades = prioridades;
        expect(component.prioridades.length).toEqual(prioridades.length);
    });

    /**
     * Verifica la cabeza y la cola de la lista de Prioridades para cmprobar que los
     * dos arreglos de Prioridades son iguales
     */
    it('a actuacion should be a actuacion (first and last)', () => {
        component.prioridades = prioridades;
        //revisar todas las atuaciones
        expect(component.prioridades[0].tipoPrioridad).toEqual(prioridades[0].tipoPrioridad);
        expect(component.prioridades[prioridades.length - 1].tipoPrioridad).toEqual(prioridades[prioridades.length - 1].tipoPrioridad);
    });
});