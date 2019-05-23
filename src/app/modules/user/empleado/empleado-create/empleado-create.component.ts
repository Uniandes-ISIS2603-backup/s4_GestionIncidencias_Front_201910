import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {EmpleadoService} from '../empleado.service'
import {Empleado} from '../empleado';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-empleado-create',
  templateUrl: './empleado-create.component.html',
  styleUrls: ['./empleado-create.component.css']
})
export class EmpleadoCreateComponent implements OnInit {
/**
 * cariable con el id del empleado 
 */
  id:number;

  /**
   * Constructor del servicio de empleado.
   * @param empleadoService servicio del empleado 
   * @param toastrService toastService
   * @param router Router
   * @param activated Activated
   */
  constructor(
    private empleadoService: EmpleadoService,
    private toastrService: ToastrService,
    private router:Router,
    private activated: ActivatedRoute
    ) {this.activated.params.subscribe(  params =>{    
      this.id=params['id'] ;
      console.log(this.id);
    });
  }


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
   * that the user created a new empleado
   */
   @Output() create = new EventEmitter();


   /**
    * Creates a new empleado
    */
   createEmpleado(): Empleado {
    this.empleadoService.createEmpleado(this.empleado)
        .subscribe((empleado) => {
            this.empleado = empleado;
            this.create.emit();        
            this.router.navigate(['/listarEmpleados',this.id]);                
        });
    
    return this.empleado;    
  }

  /**
    * Informs the parent component that the user no longer wants to create an emplado
    */
   cancelCreation(): void {
    this.router.navigate(['/listarEmpleados',this.id]);
  }
  
   /**
    * This function will initialize the component
    */

  ngOnInit() {
    this.empleado= new Empleado();
  }
}