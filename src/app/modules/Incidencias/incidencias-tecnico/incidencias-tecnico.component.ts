import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../../user/empleado/empleado.service';
import { Router,ActivatedRoute } from '@angular/router';
import { Incidencia } from '../Incidencia';
import { Tecnico } from '../../user/tecnico/tecnico';
import { TecnicoService } from '../../user/tecnico/tecnico.service';


@Component({
  selector: 'app-incidencias-tecnico',
  templateUrl: './incidencias-tecnico.component.html',
  styleUrls: ['./incidencias-tecnico.component.css']
})
export class IncidenciasTecnicoComponent implements OnInit {
  id:number;
  idAdmi:number;

  tecnico:Tecnico;
  incidencias:Incidencia[];
  constructor(private tecnicoService:TecnicoService,
    private router:Router,
    private activated:ActivatedRoute, 
    ) { 
      this.activated.params.subscribe(  params =>{    
        this.id=params['id'] ;
        console.log('Id del empleado al cual se le verán las incidencas'+this.id);
        this.idAdmi=params['idAdmi'];        
        this.getTecnico();                   
      });
    }

    getTecnico(): void {
        this.tecnicoService.getTecnico(this.id)
            .subscribe(empleado => {
                this.tecnico = empleado;
                this.incidencias=this.tecnico.incidencias;
            });
      }


      goBack():void{
        this.router.navigate(['/listarTecnicos',this.idAdmi]);
      }
  

  ngOnInit() {
  }

}
