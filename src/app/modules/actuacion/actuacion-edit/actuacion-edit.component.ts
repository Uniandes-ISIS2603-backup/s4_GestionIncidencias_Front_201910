import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

import {ActuacionService} from '../actuacion.service';
import {ActuacionDetail} from '../actuacion-detail';


@Component({
    selector: 'app-actuacion-edit',
    templateUrl: './actuacion.edit.component.html',
    styleUrls: ['./actuacion-edit.component.css']
})
export class ActuacionEditComponent implements OnInit {

    /**
    * The component's constructor
    * @param editorialService The editorial's service
    * @param toastrService The toastr to show messages to the user 
    */
    constructor(
        private editorialService: ActuacionService,
        private toastrService: ToastrService
    ) {}

    /**
    * el id de la actuacion que se quiere editar
    */
    @Input() editorial_id: number;

    /**
     * La respuesta que representa que el usuario no quiere seguir editando la actuacion actual
    */
    @Output() cancel = new EventEmitter();

    /**
    * La respuesta que indica que el usuario ha actualizado la actuacion
    */
    @Output() update = new EventEmitter();

    /**
    * la actuacion que va a ser editada
    */
    actuacion: ActuacionDetail;

    /**
    * Le hace retriev a la informacion de la actuacion
    */
    getActuacion(): void {
        this.editorialService.getActuacionDetail(this.editorial_id)
            .subscribe(act => {
                this.actuacion = act;
            });
    }

    /**
    * Updates the editorial's information
    */
    editActuacion(): void {
        this.editorialService.updateActuacion(this.actuacion)
            .subscribe(() => {
                this.update.emit();
                this.toastrService.success("La informacion de la actuacion ha sido actualizada", "Actuacion edition");
            });
    }

    /**
    * Informs the parent component that the user no longer wants to update the editorial
    */
    cancelEdition(): void {
        this.cancel.emit();
    }

    /**
    * The function which initializes the component
    */
    ngOnInit() {
        this.actuacion = new ActuacionDetail();
        this.getActuacion();
    }

    /**
    * The function which is called every time the user chooses to edit a different editorial
    */
    ngOnChanges() {
        this.ngOnInit();
    }
}
