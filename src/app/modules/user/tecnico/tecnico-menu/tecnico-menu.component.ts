import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-tecnico-menu',
  templateUrl: './tecnico-menu.component.html',
  styleUrls: ['./tecnico-menu.component.css']
})
export class TecnicoMenuComponent implements OnInit {


  id:number;

  constructor(private activated:ActivatedRoute,private router:Router)
   {this.activated.params.subscribe(  params =>{    
    this.id=params['id'] ;        
    console.log(this.id);    
  }); }

  ngOnInit() {
    
  }

  verPerfil():void{
    console.log('Va a mostrar detalle');
    this.router.navigate(['/detalleTecnico',this.id]);    
  }

  listarMisIncidencias():void{
    this.router.navigate(['/listarIncidenciasMenuTecnico',this.id])  
  }

}
