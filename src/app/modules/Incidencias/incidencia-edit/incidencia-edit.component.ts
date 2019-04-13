import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

import {IncidenciaService} from '../Incidencia.service';
import {IncidenciaDetail} from '../Incidencia-detail';


@Component({
    selector: 'app-incidencia-edit',
    templateUrl: './incidencia-edit.component.html',
    styleUrls: ['./incidencia-edit.component.css']
})
export class IncidenciaEditComponent implements OnInit {

    /**
    * The component's constructor
    * @param IncidenciaService The editorial's service
    * @param toastrService The toastr to show messages to the user 
    */
    constructor(
        private IncidenciaService: IncidenciaService,
        private toastrService: ToastrService
    ) {}

    /**
    * el id de la actuacion que se quiere editar
    */
    @Input() incidencia_id: number;

    /**
     * La respuesta que representa que el usuario no quiere seguir editando la actuacion actual
    */
    @Output() cancel = new EventEmitter();

    /**
    * La respuesta que indica que el usuario ha actualizado la actuacion
    */
    @Output() update = new EventEmitter();

    /**
    * Tla incidencia que va a ser  editada
    */
    incidencia: IncidenciaDetail;

    /**
    * Le hace retriev a la informacion de la incidencia
    */
    getIncidencia(): void {
        this.IncidenciaService.getIncidenciaDetail(this.incidencia_id)
            .subscribe(inc => {
                this.incidencia = inc;
            });
    }

    /**
    * Updates the editorial's information
    */
    editIncidencia(): void {
        this.IncidenciaService.updateEditorial(this.incidencia)
            .subscribe(() => {
                this.update.emit();
                this.toastrService.success("La informacion de la incidencia ha sido actualizada", "Incidencia edition");
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
        this.incidencia = new IncidenciaDetail();
        this.getIncidencia();
    }

    /**
    * The function which is called every time the user chooses to edit a different editorial
    */
    ngOnChanges() {
        this.ngOnInit();
    }
}
