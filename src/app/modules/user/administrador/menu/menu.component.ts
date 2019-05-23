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

/**
 * Componente que crea un menu para el administrador
 */
export class MenuComponent implements OnInit {
  /**
   * Id del admi que esta usando el menú
   */
  id:number;
  /**
   * Admi 
   */
  tecnico:Tecnico;
  
  /**
   * Constructor que construye el componente
   * @param activated permite obtener los parametros de la ruta
   * @param router permite navegar entre componentes
   * @param tecnicoService se encarga de todo lo relacionado con técnicos
   */
  constructor(private activated: ActivatedRoute,
    private router: Router,
    private tecnicoService: TecnicoService) {
    this.activated.params.subscribe(  params =>{    
      this.id=params['id'] ;
      this.getTecnico();    
    });
   }


   /**
    * Obtiene el admi de la base de datos
    */
   getTecnico(): void {
    this.tecnicoService.getTecnico(this.id)
        .subscribe(tecnico => {
            this.tecnico = tecnico;
        });
  }

  /**
   * Navega a listar empleados
   */

  listarEmpleados():void{
    this.router.navigate(['/listarEmpleados',this.id]);
  }

  /**
   * Navega a listar técnicos
   */

  listarTecnicos():void{
    this.router.navigate(['/listarTecnicos',this.id]);
  }

  /**
   * Navega a listar equipos
   */

  listarEquipos():void{
    this.router.navigate(['/listarEquipos',this.id]);
  }
  
  /**
   * Navega a listar incidencias
   */
  
  listarIncidencias():void{
    this.router.navigate(['/listarIncidencias',this.id]);
  }
    
  /**
   * Inicializa el componente
   */

  ngOnInit() {
    this.getTecnico();
  }

  /**
   * Muestra el perfil
   */
    

  verPerfil():void{
    console.log('Va a mostrar detalle');
    this.router.navigate(['/detalleTecnico',this.id]);    
  }
}
