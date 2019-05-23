import { Component, OnInit, Input, } from '@angular/core';
import { ActuacionR } from '../ActuacionR';

@Component({
    selector: 'app-incidencia-actuaciones',
    templateUrl: './incidencia-actuacion.component.html',
})
export class IncidenciaActuacionComponent implements OnInit {
    @Input() incidenciaActuaciones : ActuacionR [];
    
    public isCollapsed = false;
    
    /**
     * The function called when a review is posted to update the reviews
     */
    updateReviews(actuaciones:ActuacionR[]): void {
        this.incidenciaActuaciones = actuaciones;
    }
    
    ngOnInit(){
    }
}