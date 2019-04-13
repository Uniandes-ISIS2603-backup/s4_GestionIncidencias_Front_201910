import {Component, OnInit, Output, EventEmitter} from '@angular/core';

import {ToastrService} from 'ngx-toastr';

import {ActuacionService} from '../actuacion.service';

import {Actuacion} from '../actuacion';

@Component({
    selector: 'app-actuacion-create',
    templateUrl: './atuacion-create.component.html',
    styleUrls: ['./actuacion-create.component.css']
})
export class ActuacionCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param actuacionService The editorials' services provider
    * @param toastrService The toastr to show messages to the user 
    */
    constructor(
        private editorialService: ActuacionService,
        private toastrService: ToastrService
    ) {}

    /**
    * La nueva actuacion a crear
    */
    actuacion: Actuacion;

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
    createEditorial(): Actuacion {
        this.editorialService.createActuacion(this.actuacion)
            .subscribe((editorial) => {
                this.actuacion = editorial;
                this.create.emit();
                this.toastrService.success("La actuacion fue creada", "Actuacion creation");
            }, err => {
                this.toastrService.error(err, "Error");
            });
        return this.actuacion;
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
        this.actuacion = new Actuacion();
    }
}
