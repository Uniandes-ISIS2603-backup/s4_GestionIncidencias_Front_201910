 
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
    private editorialService: EmpleadoService,
    private toastrService: ToastrService
) {}
   /**
    * The id of the empleado that the user wants to edit
    * This is passed as a parameter by the parent component
    */
   @Input() empleado_id: number;

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

   /**
    * Retrieves the information of the empleado
    */

   getEmpleado(): void {
    this.editorialService.getEmpleado(this.empleado_id)
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
    * The function which is called every time the user chooses to edit a different editorial
    */
   ngOnChanges() {
    this.ngOnInit();
  }
}
