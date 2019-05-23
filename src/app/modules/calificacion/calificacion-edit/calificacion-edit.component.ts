import { Component, OnInit, ViewContainerRef, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { calificacionService } from '../calificacion.service';
import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';
import { ToastrService} from 'ngx-toastr';
import { calificacion } from '../calificacion';


/**
 * Componente que representa una edicion de una calificacion
 */
@Component({
  selector: 'app-calificacion-edit',
  templateUrl: './calificacion-edit.component.html',
  styleUrls: ['./calificacion-edit.component.css']
})
export class calificacionEditComponent implements OnInit {

 /**
    * El constructor del componente
    * @param calificacionService El servicio de la califdicacion
    * @param toastrService El 'toastr' que le muestra mensajes al usuario 
    */
     constructor(
      private calificacionService: calificacionService,
      private toastrService: ToastrService
    ) {}
  
    /**
     * La calificacion a crear
     */
    calificacion: calificacion;

   /**
    * El id de la calificacion la cual el usuario desea modificar
    * Esto es enviado como un parametro por el padre
    */
   @Input() calificacion_id: number;

   /**
   * Le indica al componente padre que el usuario
   * no quiere crear una calificacion
   */
   @Output() cancel = new EventEmitter();

   /**
   * Le indica al componente padre que el usuario
   * desea actualizar una calificacion
   */
   @Output() update = new EventEmitter();
  
    /**
    * Recupera la informacion de la calificacion
    */
   getcalificacion(): void {
    this.calificacionService.getcalificacion(this.calificacion_id)
        .subscribe(calificacion => {
            this.calificacion = calificacion;
        });
    }

    /**
    * Inicializa al componente
    */
    ngOnInit() {
      this.calificacion= new calificacion();
      this.getcalificacion();
    }

    /**
    * Se llama cuando el usuario quiere editar otra calificacion
    */
   ngOnChanges() {
    this.ngOnInit();
}

}
