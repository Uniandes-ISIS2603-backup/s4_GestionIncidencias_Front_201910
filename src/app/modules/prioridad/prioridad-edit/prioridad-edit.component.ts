import { Component, OnInit, ViewContainerRef, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { PrioridadService } from '../prioridad.service';
import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';
import { ToastrService} from 'ngx-toastr';
import { Prioridad } from '../prioridad';

@Component({
  selector: 'app-prioridad-edit',
  templateUrl: './prioridad-edit.component.html',
  styleUrls: ['./prioridad-edit.component.css']
})
export class PrioridadEditComponent implements OnInit {

  /**
    * The component's constructor
    * @param prioridadService The prioridad's service
    * @param toastrService The toastr to show messages to the user 
    */
   constructor(
    private prioridadService: PrioridadService,
    private toastrService: ToastrService
  ) {}

  /**
   * The prioridad to create
   */

  prioridad: Prioridad;

  /**
  * The id of the prioridad that the user wants to edit
  * This is passed as a parameter by the parent component
  */
 @Input() prioridad_id: any;

 /**
 * The output which tells the parent component
 * that the user no longer wants to create an calificacion
 */
 @Output() cancel = new EventEmitter();

 /**
 * The output which tells the parent component
 * that the user updated a new prioridad
 */
 @Output() update = new EventEmitter();

  /**
  * Retrieves the information of the prioridad
  */
 getPrioridad(): void {
  this.prioridadService.getPrioridadDetail(this.prioridad_id)
      .subscribe(prioridad => {
          this.prioridad = prioridad;
      });
}

  /**
  * The function which initializes the component
  */

  ngOnInit() {
    this.prioridad= new Prioridad();
    this.getPrioridad();
  }

    /**
  * The function which is called every time the user chooses to edit a different calificacion
  */
 ngOnChanges() {
  this.ngOnInit();
}

}
