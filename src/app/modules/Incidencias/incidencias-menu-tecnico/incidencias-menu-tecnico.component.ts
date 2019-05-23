import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Incidencia } from '../Incidencia';
import { Tecnico } from '../../user/tecnico/tecnico';
import { TecnicoService } from '../../user/tecnico/tecnico.service';


@Component({
  selector: 'app-incidencias-menu-tecnico',
  templateUrl: './incidencias-menu-tecnico.component.html',
  styleUrls: ['./incidencias-menu-tecnico.component.css']
})
export class IncidenciasMenuTecnicoComponent implements OnInit {

  id:number;
  

  tecnico:Tecnico;
  incidencias:Incidencia[];
  constructor(private tecnicoService:TecnicoService,
    private router:Router,
    private activated:ActivatedRoute, 
    ) { 
      this.activated.params.subscribe(  params =>{    
        this.id=params['id'] ;
        console.log('Id del empleado al cual se le verán las incidencas'+this.id);           
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
        this.router.navigate(['/menuTecnico',this.id]);
      }
  

  ngOnInit() {
  }

}
