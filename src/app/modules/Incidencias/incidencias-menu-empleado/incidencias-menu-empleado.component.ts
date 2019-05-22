import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Incidencia } from '../Incidencia';
import { Tecnico } from '../../user/tecnico/tecnico';
import { TecnicoService } from '../../user/tecnico/tecnico.service';
import { Empleado } from '../../user/empleado/empleado';
import { EmpleadoService } from '../../user/empleado/empleado.service';

@Component({
  selector: 'app-incidencias-menu-empleado',
  templateUrl: './incidencias-menu-empleado.component.html',
  styleUrls: ['./incidencias-menu-empleado.component.css']
})
export class IncidenciasMenuEmpleadoComponent implements OnInit {

  id:number;
  

  empleado:Empleado;
  incidencias:Incidencia[];
  constructor(private empleadoService:EmpleadoService,
    private router:Router,
    private activated:ActivatedRoute, 
    ) { 
      this.activated.params.subscribe(  params =>{    
        this.id=params['id'] ;
        console.log('Id del empleado al cual se le verán las incidencas'+this.id);           
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
        this.router.navigate(['/menuTecnico',this.id]);
      }
  

  ngOnInit() {
  }

  

}
