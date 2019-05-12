import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Incidencia} from '../Incidencia';
import {IncidenciaService} from '../Incidencia.service';

/**
*Esta es la clase que se encarga de controlar las incidencias
*/

/**
* The component for the list of editorials in the BookStore
*/
@Component({
    selector: 'app-Incidencia',
    templateUrl: './incidencia-list.component.html',
    styleUrls: ['./incidencia-list.component.css']
})
export class IncidenciaListComponent implements OnInit {

    /**
    * Constructor for the component
    * @param incidenciaService proveedor de servicios
    */
    constructor(
        private incidenciaService: IncidenciaService,
        private route: ActivatedRoute) {}


    /**
    * The list of editorials which belong to the BookStore
    */
   incidencias: Incidencia[];

   /**
    * atributo  que representa las decisiones de carga de informacion
    */
   allIncidencias: string = 'no';
    

    /**
    * Actualiza la lista de incidencias
    */
    getIncidencias(): void {
        this.incidenciaService.getIncidencias()
            .subscribe(inc => {
                this.incidencias = inc;
            });
    }

    /**
    * The method which initializes the component
    */
   ngOnInit() {
    this.route.queryParams
        .filter(params => params.allbooks)
        .subscribe(params => {
            console.log(params);

            this.allIncidencias = params.allbooks;
            console.log(this.allIncidencias);
        });
    if (this.allIncidencias == 'yes') {
        console.log("allbooks");

        this.getIncidencias();
    }
}
 
    
    
}
