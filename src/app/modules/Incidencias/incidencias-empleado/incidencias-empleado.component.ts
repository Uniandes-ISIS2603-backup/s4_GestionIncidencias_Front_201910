import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../user/empleado/empleado';
import { EmpleadoService } from '../../user/empleado/empleado.service';
import { Router,ActivatedRoute } from '@angular/router';
import { Incidencia } from '../Incidencia';

@Component({
  selector: 'app-incidencias-empleado',
  templateUrl: './incidencias-empleado.component.html',
  styleUrls: ['./incidencias-empleado.component.css']
})
export class IncidenciasEmpleadoComponent implements OnInit {
  

  id:number;
  idAdmi:number;

  empleado:Empleado;
  incidencias:Incidencia[];
  constructor(private empleadoService:EmpleadoService,
    private router:Router,
    private activated:ActivatedRoute, 
    ) { 
      this.activated.params.subscribe(  params =>{    
        this.id=params['id'] ;
        console.log('Id del empleado al cual se le verán las incidencas'+this.id);
        this.idAdmi=params['idAdmi'];        
        this.getEmpleado();           
        
      });
    }


    getEmpleado(): void {
        this.empleadoService.getEmpleado(this.id)
            .subscribe(empleado => {
                this.empleado = empleado;
                this.incidencias=this.empleado.incidencias;
            });
      }



      goBack():void{
        this.router.navigate(['/listarEmpleados',this.idAdmi]);
      }
  

  ngOnInit() {
  }

}
