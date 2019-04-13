import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {PrioridadService} from '../prioridad.service';
import {Prioridad} from '../prioridad';

@Component({
    selector: 'app-prioridad-create',
    templateUrl: './prioridad-create.component.html'
})
export class PrioridadCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param prioridadService The editorials' services provider
    * @param toastrService The toastr to show messages to the user 
    */
    constructor(
        private prioridadService: PrioridadService,
        private toastrService: ToastrService
    ) {}

    /**
    * La nueva prioridad a crear
    */
    prioridad: Prioridad;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an priotridad
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user created a new prioridad
    */
    @Output() create = new EventEmitter();

    /**
    * Creates a new Prioridad
    */
    createPrioridad(): Prioridad {
        this.prioridadService.createPrioridad(this.prioridad)
            .subscribe((prioridad) => {
                this.prioridad = prioridad;
                this.create.emit();
                this.toastrService.success("La Prioridad fue creada", "Prioridad creation");
            }, err => {
                this.toastrService.error(err, "Error");
            });
        return this.prioridad;
    }

    /**
    * Informs the parent component that the user no longer wants to create an Prioridad
    */
    cancelCreation(): void {
        this.cancel.emit();
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.prioridad = new Prioridad();
    }
}