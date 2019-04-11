import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { EmpleadoService } from '../empleado.service';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';
import { Empleado } from '../empleado';
@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent implements OnInit {

  /**
    * Constructor for the component
    * @param empleadoService The author's services provider
    */
  constructor(
    private empleadoService: EmpleadoService,
    private modalDialogService: ModalDialogService,
    private viewRef: ViewContainerRef,
    private toastrService: ToastrService) {}

  /**      
    * List of empleados
    */

   empleados:Empleado[];


    /**
     * Shoy the list of empleados
     */

   shows: boolean=true;

   /**
    * Shows or hides the create component
    */
   showCreate: boolean;

   /**
    * Shows or hides the edit component.
    */
   showEdit: boolean;

   /**
    * The id of the empleado being edited.
    */
   empleado_edit_id: number;

    /**
    * Asks the service to update the list of empleados
    */
     getEmpleados(): void {
      this.empleadoService.getEmpleados()
          .subscribe(empleados => {
              this.empleados = empleados;
          });
    }
  
    updateEmpleado(): void { 
      this.showEdit = false;
      location.reload();
  }

     /**
    * Shows or hides the create component
    */
   showHideEdit(editorial_id: number): void {
    if (!this.showEdit || (this.showEdit && editorial_id != this.empleado_edit_id)) {        
        this.empleado_edit_id = editorial_id;
        this.showEdit = !this.showEdit;
    }
    else {
        this.showEdit = !this.showEdit;
    }
}
 
  /**
    * This will initialize the component by retrieving the list of empleados from the service
    * This method will be called when the component is created
    */
     ngOnInit() {       
      this.showCreate = false;
      this.showEdit = false;
      this.getEmpleados();
  }

  ngOnChanges() {    
    this.ngOnInit();
    this.getEmpleados();
  }
}
