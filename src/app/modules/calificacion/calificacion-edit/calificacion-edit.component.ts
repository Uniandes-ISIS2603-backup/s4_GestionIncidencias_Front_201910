import { Component, OnInit, ViewContainerRef, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { calificacionService } from '../calificacion.service';
import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';
import { ToastrService} from 'ngx-toastr';
import { calificacion } from '../calificacion';



@Component({
  selector: 'app-calificacion-edit',
  templateUrl: './calificacion-edit.component.html',
  styleUrls: ['./calificacion-edit.component.css']
})
export class calificacionEditComponent implements OnInit {

  /**
    * The component's constructor
    * @param calificacionService The editorial's service
    * @param toastrService The toastr to show messages to the user 
    */
     constructor(
      private calificacionService: calificacionService,
      private toastrService: ToastrService
    ) {}
  
    /**
     * The calificacion to create
     */
  
    calificacion: calificacion;

    /**
    * The id of the calificacion that the user wants to edit
    * This is passed as a parameter by the parent component
    */
   @Input() calificacion_id: number;

   /**
   * The output which tells the parent component
   * that the user no longer wants to create an calificacion
   */
   @Output() cancel = new EventEmitter();

   /**
   * The output which tells the parent component
   * that the user updated a new calificacion
   */
   @Output() update = new EventEmitter();
  
    /**
    * Retrieves the information of the calificacion
    */
   getcalificacion(): void {
    this.calificacionService.getcalificacion(this.calificacion_id)
        .subscribe(calificacion => {
            this.calificacion = calificacion;
        });
}

    /**
    * The function which initializes the component
    */

    ngOnInit() {
      this.calificacion= new calificacion();
      this.getcalificacion();
    }

      /**
    * The function which is called every time the user chooses to edit a different calificacion
    */
   ngOnChanges() {
    this.ngOnInit();
}

}
