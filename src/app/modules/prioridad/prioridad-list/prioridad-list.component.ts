import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/filter';
import {Prioridad} from '../prioridad';
import {PrioridadService} from '../prioridad.service';

@Component({
    selector: 'app-prioridad-list',
    templateUrl: './prioridad-list.component.html'
})
export class PrioridadListComponent implements OnInit {

    /**
    * La lista de Prioridades 
    */
    @Input() prioridades: Prioridad[];

    /**
    *El  constructor del componente
    */
    constructor(private prioridadService: PrioridadService, private route: ActivatedRoute) {}

    allprioridades: string = 'no';
    /**
    * This obtiene todas las Prioridades de una incidencia
    */
    getPrioridades(): void {
        this.prioridadService.getPrioridades()
            .subscribe(prioridadess => {
                this.prioridades = prioridadess;
            });
    }

      /**
    * El metodo incializa el componente
    */
   ngOnInit() {
    this.route.queryParams
        .filter(params => params.allbooks)
        .subscribe(params => {
            console.log(params);

            this.allprioridades = params.allbooks;
            console.log(this.allprioridades);
        });
    if (this.allprioridades == 'yes') {
        console.log("allprioridades");

        this.getPrioridades();
    }
}
}