 
import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';


@Component({
  selector: 'app-empleado-edit',
  templateUrl: './empleado-edit.component.html',
  styleUrls: ['./empleado-edit.component.css']
})
export class EmpleadoEditComponent implements OnInit {
  
  /**
    * The component's constructor
    * @param EmpleadoService The empleado's service
    * @param toastrService The toastr to show messages to the user 
    */
   constructor(
    private empleadoService: EmpleadoService,
    private toastrService: ToastrService
) {}
   /**
    * The id of the empleado that the user wants to edit
    * This is passed as a parameter by the parent component
    */
   @Input() empleado_edit_id: number;

   /**
   * The output which tells the parent component
   * that the user no longer wants to create an empleado
   */
   @Output() cancel = new EventEmitter();

   /**
   * The output which tells the parent component
   * that the user updated a new empleado
   */
   @Output() update = new EventEmitter();

   /**
    * The empleado to edit 
    */
  empleado: Empleado;

  showEdit:boolean;

   /**
    * Retrieves the information of the empleado
    */

   getEmpleado(): void {
    this.empleadoService.getEmpleado(this.empleado_edit_id)
        .subscribe(empleado => {
            this.empleado = empleado;
        });
  }
  
   /**
    * The function which initializes the component
    */  

  ngOnInit() {
    this.empleado= new Empleado();
    this.getEmpleado();
  }


/**
    * Updates the editorial's information
    */
   editEmpleado(): void {
     this.empleadoService.updateEmpleados(this.empleado)
        .subscribe(() => {
            this.update.emit();    
            
            
        });
}

/**    
    * Informs the parent component that the user no longer wants to update the editorial
    */
   cancelEdition(): void {
    this.cancel.emit();
}

  

showHideEdit(empleado_edit_id: number): void {
  if (!this.showEdit || (this.showEdit && empleado_edit_id != this.empleado_edit_id)) {
      this.showEdit = true;
      this.empleado_edit_id = empleado_edit_id;
  }
  else {
      this.showEdit = false;
  }
}
   /**
    * The function which is called every time the user chooses to edit a different editorial
    */
   ngOnChanges() {
    this.ngOnInit();
  }
}
