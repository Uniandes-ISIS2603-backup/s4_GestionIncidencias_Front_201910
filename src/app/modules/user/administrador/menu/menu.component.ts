import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../user';
import { TecnicoService } from '../../tecnico/tecnico.service';
import { Tecnico } from '../../tecnico/tecnico';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  id:number;
  tecnico:Tecnico;
  constructor(private activated: ActivatedRoute,
    private router: Router,
    private tecnicoService: TecnicoService) {
    this.activated.params.subscribe(  params =>{    
      this.id=params['id'] ;
      this.getTecnico();    
    });
   }

   getTecnico(): void {
    this.tecnicoService.getTecnico(this.id)
        .subscribe(tecnico => {
            this.tecnico = tecnico;
        });
  }

  listarEmpleados():void{
    this.router.navigate(['/listarEmpleados',this.id]);
  }

  listarTecnicos():void{
    this.router.navigate(['/listarTecnicos',this.id]);
  }

  listarEquipos():void{
    this.router.navigate(['/listarEquipos',this.id]);
  }
  

  ngOnInit() {
    this.getTecnico();
  }

  verPerfil():void{
    console.log('Va a mostrar detalle');
    this.router.navigate(['/detalleTecnico',this.id]);    
  }
}
