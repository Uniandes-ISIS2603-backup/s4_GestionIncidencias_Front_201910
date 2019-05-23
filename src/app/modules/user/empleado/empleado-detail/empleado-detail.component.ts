import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-empleado-detail',
  templateUrl: './empleado-detail.component.html',
  styleUrls: ['./empleado-detail.component.css']
})
export class EmpleadoDetailComponent implements OnInit {
 /**
  * El id del empleado, viene como parametro
  */
   id:number;
  /**
   * El empleado al que se muestra el detail
   */
  empleado: Empleado;
 

  /**
   * constructor del empleado 
   * @param empleadoService atributo que entra como parametro del empleadoService
   * @param activated atributo que entra como parametro de activated
   * @param router atributo que entra como parametro del router
   */
  constructor(private empleadoService: EmpleadoService,
    private activated: ActivatedRoute,
    private router: Router) {
      this.activated.params.subscribe(  params =>{    
        this.id=params['id'] ;        
        console.log(this.id);
        this.getEmpleado();
      });
     }

    /**
     *  Recupera la información del empleado
    */
     getEmpleado(): void {
      this.empleadoService.getEmpleado(this.id)
          .subscribe(empleado => {
              this.empleado = empleado;
          });
    }

    /**
     * Metodo que edita la informacion del empleado
     */
    editEmpleado(): void {
      console.log('La nueva cedula del empleado es'+this.empleado.password);
      this.empleadoService.updateEmpleados(this.empleado)
         .subscribe((empleados) => {             
           this.empleado=empleados;   
           console.log('Se actualizo la contraseña');
         });        
 }

 /**
  * metodo que vuelve al menu anterior de empleado
  */
   goBack():void{
      this.router.navigate(['/menuEmpleado',this.empleado.id]);                     
  }

  /**
   * ngOnInit de lo que podamos llegar a necesitar
   */
  ngOnInit() {
  }

}
