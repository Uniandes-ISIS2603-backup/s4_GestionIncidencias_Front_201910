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

    editEmpleado(): void {
      console.log('La nueva cedula del empleado es'+this.empleado.password);
      this.empleadoService.updateEmpleados(this.empleado)
         .subscribe((empleados) => {             
           this.empleado=empleados;   
           console.log('Se actualizo la contraseña');
         });        
 }

   goBack():void{
      this.router.navigate(['/menuEmpleado',this.empleado.id]);                     
  }

  
  ngOnInit() {
  }

}
