import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

import { equipoComputo } from '../equipoComputo'
import { equipoComputoService} from '../equipoComputo.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-equipoComputo-create',
  templateUrl: './equipoComputo-create.component.html',
  styleUrls: ['./equipoComputo-create.component.css']
})

/**
 * Componente que muestra  el equipo computo
 */

export class equipoComputoCreateComponent implements OnInit {

  /**
   * El id del empleado que lo invoco
    */
  id:number;

  /**
   * Construye un componente create
   * @param equipoService servicio del equipo
   * @param toastrService servicio para mostrar los mensajes
   * @param router permite navegar entre componentes
   * @param activated permite obtener los parametros
   */


  constructor(
    private equipoService: equipoComputoService,
    private toastrService: ToastrService,
    private router:Router,
    private activated:ActivatedRoute
    ) {
      this.activated.params.subscribe(  params =>{    
        this.id=params['id'] ;
        console.log(this.id);
      });


    }

  /**
   * El nuevo equipo computo
   */
    equipo:equipoComputo;


   /**
    * Creates a new tecnico
    */
     createEquipo(): equipoComputo {
      this.equipoService.createequipoComputo(this.equipo)
          .subscribe((equipo) => {
              this.equipo = equipo;
              
              this.router.navigate(['/listarEquipos',this.id]);                
          });
      return this.equipo;    
    }

    /**
      * Cancela la creación y vuelve al componente que lo invoco
      */
     cancelCreation(): void {
      this.router.navigate(['/listarEquipos',this.id]);
    }
  
     /**
      * Función que inicializa el componente
      */

    ngOnInit() {
      this.equipo= new equipoComputo();
    }

}