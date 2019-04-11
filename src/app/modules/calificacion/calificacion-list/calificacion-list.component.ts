import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { calificacionService } from '../calificacion.service';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';
import { calificacion } from '../calificacion';

@Component({
  selector: 'app-calificacion-list',
  templateUrl: './calificacion-list.component.html',
  styleUrls: ['./calificacion-list.component.css']
})
export class calificacionListComponent implements OnInit {
   /**
    * Constructor for the component
    * @param calificacionService The author's services provider
    */
   constructor(
    private calificacionService: calificacionService,
    private modalDialogService: ModalDialogService,
    private viewRef: ViewContainerRef,
    private toastrService: ToastrService) {}

  /**
    * List of calificacions
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
     * Shoy the list of calificacions
     */

    shows: boolean=false;

    /**
    * Asks the service to update the list of calificacions
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
      * This will initialize the component by retrieving the list of empleados from the service
      * This method will be called when the component is created
      */
       ngOnInit() {
        this.showCreate = false;
        this.showEdit = false;
        this.getcalificacions();
      }
}
