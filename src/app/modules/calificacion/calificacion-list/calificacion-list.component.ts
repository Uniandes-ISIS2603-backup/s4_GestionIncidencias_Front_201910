import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { calificacionService } from '../calificacion.service';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';
import { calificacion } from '../calificacion';

/**
 * Componente que lista las calificaciones
 */
@Component({
  selector: 'app-calificacion-list',
  templateUrl: './calificacion-list.component.html',
  styleUrls: ['./calificacion-list.component.css']
})
export class calificacionListComponent implements OnInit {
  /**
    * Constructor del componente
    * @param calificacionService El servicio proveedor de la calificacion
    */
   constructor(
    private calificacionService: calificacionService,
    private modalDialogService: ModalDialogService,
    private viewRef: ViewContainerRef,
    private toastrService: ToastrService) {}

  /**
  * Lista de calificaciones
  */
  calificacions:calificacion[];

  /**
    * Shows or hides the create component
    */
   showCreate: boolean;

   /**
    * Shows or hides the edit component.
    */
   showEdit: boolean;

   /**
    * The id of the calificacion being edited.
    */
   calificacion_edit_id: number;


  /**
    * Muestra u oculta el componente creado
    */
    shows: boolean=false;

   /**
    * El id de la calificacion a ser editada
    */
     getcalificacions(): void {
      this.calificacionService.getcalificacions()
          .subscribe(calificacions => {
              this.calificacions = calificacions;
          });
    }

    updatecalificacion(): void {
      this.showEdit = false;
  }

   /**
      * Inicializa el componente recuperando la lista de empleados del servicio
      * Este metodo se llama cuando se crea el componente
      */
       ngOnInit() {
        this.showCreate = false;
        this.showEdit = false;
        this.getcalificacions();
      }
}
