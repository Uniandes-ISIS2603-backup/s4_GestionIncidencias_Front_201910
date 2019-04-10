import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {EmpleadoService} from '../empleado.service'
import {Empleado} from '../empleado';
@Component({
  selector: 'app-empleado-create',
  templateUrl: './empleado-create.component.html',
  styleUrls: ['./empleado-create.component.css']
})
export class EmpleadoCreateComponent implements OnInit {
  constructor(
    private editorialService: EmpleadoService,
    private toastrService: ToastrService
    ) {}

  /**
   * The new empleado
   */
    empleado:Empleado;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an empleado
    */
   @Output() cancel = new EventEmitter();

   /**
   * The output which tells the parent component
   * that the user created a new editorial
   */
   @Output() create = new EventEmitter();


   /**
    * Creates a new empleado
    */
   createEmpleado(): Empleado {
    this.editorialService.createEmpleado(this.empleado)
        .subscribe((empleado) => {
            this.empleado = empleado;
            this.create.emit();
            this.toastrService.success("El empleado fue creado", "Creación del empleado");
        }, err => {
            this.toastrService.error(err, "Error");
        });
    return this.empleado;    
  }

  /**
    * Informs the parent component that the user no longer wants to create an editorial
    */
   cancelCreation(): void {
    this.cancel.emit();
  }
  
   /**
    * This function will initialize the component
    */

  ngOnInit() {
    this.empleado= new Empleado();
  }
}