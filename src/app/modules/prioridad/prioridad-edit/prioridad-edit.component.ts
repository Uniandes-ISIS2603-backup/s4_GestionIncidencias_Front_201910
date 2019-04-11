import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

import {PrioridadService} from '../prioridad.service';
import {PrioridadDetail} from '../prioridad-detail';


@Component({
    selector: 'app-prioridad-edit',
    templateUrl: './prioridad-edit.component.html'
})
export class PrioridadEditComponent implements OnInit {

    /**
    * The component's constructor
    * @param prioridadService The Prioridad's service
    * @param toastrService The toastr to show messages to the user 
    */
    constructor(
        private prioridadService: PrioridadService,
        private toastrService: ToastrService
    ) {}

    /**
    * el id de la prioridad que se quiere editar
    */
    @Input() prioridad_id: number;

    /**
     * La respuesta que representa que el usuario no quiere seguir editando la prioridad actual
    */
    @Output() cancel = new EventEmitter();

    /**
    * La respuesta que indica que el usuario ha actualizado la prioridad
    */
    @Output() update = new EventEmitter();

    /**
    * la prioridad que va a ser editada
    */
    prioridad: PrioridadDetail;

    /**
    * Le hace retriev a la informacion de la prioridad
    */
    getPrioridad(): void {
        this.prioridadService.getPrioridadDetail(this.prioridad_id)
            .subscribe(act => {
                this.prioridad = act;
            });
    }

    /**
    * Updates the editorial's information
    */
    editPrioridad(): void {
        this.prioridadService.updatePrioridad(this.prioridad)
            .subscribe(() => {
                this.update.emit();
                this.toastrService.success("La informacion de la prioridad ha sido actualizada", "Prioridad edition");
            });
    }

    /**
    * Informs the parent component that the user no longer wants to update the prioridad
    */
    cancelEdition(): void {
        this.cancel.emit();
    }

    /**
    * The function which initializes the component
    */
    ngOnInit() {
        this.prioridad = new PrioridadDetail();
        this.getPrioridad();
    }

    /**
    * The function which is called every time the user chooses to edit a different prioridad
    */
    ngOnChanges() {
        this.ngOnInit();
    }
}