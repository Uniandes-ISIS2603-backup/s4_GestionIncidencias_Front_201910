import {Component, OnInit, Output, EventEmitter}  from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';

import {IncidenciaService} from '../Incidencia.service';

import {Incidencia} from '../Incidencia';



@Component({
    selector: 'app-incidencia-create',
    templateUrl: './incidencia-create.component.html',
    styleUrls: ['./incidencia-create.css'],
    providers: [DatePipe]
})
export class IncidenciaCreateComponent implements OnInit {

   /**
    * Constructor for the component
    * @param incidenciaService The editorials' services provider
    * @param toastrService The toastr to show messages to the user 
    */
   constructor(
    private incidenciaService: IncidenciaService,
    private toastrService: ToastrService
) {}

/**
* La nueva actuacion a crear
*/
incidencia: Incidencia;

/**
* The output which tells the parent component
* that the user no longer wants to create an editorial
*/
@Output() cancel = new EventEmitter();

/**
* The output which tells the parent component
* that the user created a new editorial
*/
@Output() create = new EventEmitter();

/**
* Creates a new editorial
*/
createIncidencia(): Incidencia {
    this.incidenciaService.createIncidencia(this.incidencia)
        .subscribe((editorial) => {
            this.incidencia = editorial;
            this.create.emit();
            this.toastrService.success("La incidencia fue creada", "Incidencia creation");
        }, err => {
            this.toastrService.error(err, "Error");
        });
    return this.incidencia;
}

/**
* Informs the parent component that the user no longer wants to create an editorial
*/
cancelCreation(): void {
    this.cancel.emit();
}

/**
* This function will initialize the component
*/
ngOnInit() {
    this.incidencia = new Incidencia();
}
}
