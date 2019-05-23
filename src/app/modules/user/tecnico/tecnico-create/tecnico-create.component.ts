import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

import { Tecnico } from '../tecnico';
import { TecnicoService} from '../tecnico.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tecnico-create',
  templateUrl: './tecnico-create.component.html',
  styleUrls: ['./tecnico-create.component.css']
})
/**
 * Componente encargado de la creación del técnico
 * @author Valerie Parra Cortés
 */
export class TecnicoCreateComponent implements OnInit {

  /**
   * Indica el id del administrador que llamo al componente
   */
  id:number;

  /**
   * Constructor del componente, se encarga de injectar las cosas necesarias
   * @param tecnicoService El servicio del técnico que maneja las peticiones HTTP 
   * @param toastrService  El servicio que permite enviar los msn de error, información y éxito
   * @param router Permite navegar entre componentes
   * @param activated Permite obtener los parametros de la ruta
   */
  constructor(
    private tecnicoService: TecnicoService,
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
   * El nuevo técnico
   */
    tecnico:Tecnico;
    
   /**
    * Crea un nuevo técnico
    */
     createTecnico(): Tecnico {
      this.tecnicoService.createTecnico(this.tecnico)
          .subscribe((tecnico) => {
              this.tecnico = tecnico;
              
              this.router.navigate(['/listarTecnicos',this.id]);                
          });
      return this.tecnico;    
    }

    /**
      * Cancela la navegación y devuelve al componente anterior 
      */
     cancelCreation(): void {
      this.router.navigate(['/listarTecnicos',this.id]);
    }
  
     /**
      * Esta función inicializa el componten
      */

    ngOnInit() {
      this.tecnico= new Tecnico();
    }

}
