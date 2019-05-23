 
import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-empleado-edit',
  templateUrl: './empleado-edit.component.html',
  styleUrls: ['./empleado-edit.component.css']
})
export class EmpleadoEditComponent implements OnInit {
  
  
    /**
     * atributo que almacena el id del empleado
     */
    id:number;

    /**
     * atributo que almacena el id del admin
     */
    idAdmi:number;

    /**
     * Metodo constructor del empleado
     * @param EmpleadoService el servicio del empleado
     * @param toastrService el toastr muestra el mensaje del usuario
     * @param router touter del servicio
     * @param activated activated
     */
   constructor(
    private empleadoService: EmpleadoService,
    private toastrService: ToastrService,
    private router: Router,
    private activated: ActivatedRoute){
      this.activated.params.subscribe(  params =>{    
      this.id=params['id'] ;
      this.idAdmi=params['idAmi'];
      console.log(this.id);
      this.getEmpleado();
    });
    }




   /**
    * El id del empleado que el ususario va a modificar
    * este es pasado como un parametro por el omponente padre
    */
   @Input() empleado_edit_id: number;

   /**
   * el output el cual es llamado por el componente padre
   * el usuario no necesita crear el empleado
   */
   @Output() cancel = new EventEmitter();

   /**
   * el output el cual es llamado por el componente padre
   * que el usuario actualiza un nuevo empleado
   */
   @Output() update = new EventEmitter();

   /**
    * el empleado a editar
    */
  empleado: Empleado;


  /**
   * edicion del empleado
   */
  showEdit:boolean;

   /**
    * metodo que recupera la informacion del empleado
    */
   getEmpleado(): void {
    this.empleadoService.getEmpleado(this.id)
        .subscribe(empleado => {
            this.empleado = empleado;
            console.log(empleado);
        });
  }
  
   /**
    * la funcion que inicializa el componente
    */  

  ngOnInit() {
    this.empleado= new Empleado();
    this.getEmpleado();
  }


/**
    * actializacion del empleado
    */
   editEmpleado(): void {
     this.empleadoService.updateEmpleados(this.empleado)
        .subscribe(() => {
            this.update.emit(); 
            this.router.navigate(['/listarEmpleados',this.idAdmi]);        
            
        });
}

/**    
    * informe del componente padre que el usuario no necesita actualizar en el empleado
    */
   cancelEdition(): void {
     this.router.navigate(['listarEmpleados',this.idAdmi]);
    
}

  
/**
 * Muestra/ oculta la informacion del empleado a editar.
 * @param empleado_edit_id atributo que representa el numero id del empleado
 */
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
    * funcion con la cual es llamada todo el tiempo que el usuario escoge editar un empleado distinto.
    */
   ngOnChanges() {
    this.ngOnInit();
  }
}
