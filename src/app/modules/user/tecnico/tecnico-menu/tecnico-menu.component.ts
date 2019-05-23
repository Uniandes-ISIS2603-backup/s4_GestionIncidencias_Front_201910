import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-tecnico-menu',
  templateUrl: './tecnico-menu.component.html',
  styleUrls: ['./tecnico-menu.component.css']
})

/**
 * Componente que muestra el menu del técnico
 */
export class TecnicoMenuComponent implements OnInit {


  /**
   * Id del técnico
   */
  id:number;


  /**
   * Construye un menu de un técnico
   * @param activated es necesario para obtener los parametros de la ruta
   * @param router permite navegar entre componentes
   */

  constructor(private activated:ActivatedRoute,private router:Router)
   {this.activated.params.subscribe(  params =>{    
    this.id=params['id'] ;        
    console.log(this.id);    
  }); }


  /**
   * AL inicializar el componente
   */
  ngOnInit() {
    
  }


  /**
   * Muestra e
   */

  verPerfil():void{
    console.log('Va a mostrar detalle');
    this.router.navigate(['/detalleTecnico',this.id]);    
  }

  listarMisIncidencias():void{
    this.router.navigate(['/listarIncidenciasMenuTecnico',this.id])  
  }

}
