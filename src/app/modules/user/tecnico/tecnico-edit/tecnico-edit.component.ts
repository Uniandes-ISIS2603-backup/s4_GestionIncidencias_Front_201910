import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { TecnicoService } from '../tecnico.service';

import { ToastrService} from 'ngx-toastr';
import { Tecnico } from '../tecnico';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-tecnico-edit',
  templateUrl: './tecnico-edit.component.html',
  styleUrls: ['./tecnico-edit.component.css']
})

/**
 * Componente encargado de la edición de un técnico
 */
export class TecnicoEditComponent implements OnInit {
  /**
   * id del tecnico que se editara
   */
  id:number;
  /**
   * Id del administrador que esta editando al técnico
   */
  idAdmi:number;
  
  /**
   * Construye el componente y le inyecta los servicios necesarios
   * @param tecnicoService el servicio del técnico 
   * @param toastrService el servicio para mostrar los msn de error, exito y información
   * @param router el router para navegar etre componentes
   * @param activated permite obtener los parametros de la ruta
   */
     constructor(
      private tecnicoService: TecnicoService,
      private toastrService: ToastrService,
      private router: Router,
      private activated: ActivatedRoute
    ) {
      this.activated.params.subscribe(  params =>{    
        this.id=params['id'] ;
        this.idAdmi=params['idAdmi'];
        console.log(this.id);
        this.getTecnico();
      });

    }
  
    /**
     *  Técnico a crear
     */
  
    tecnico: Tecnico;
    /**
     * Variable booleana que indica si se muestra o no el edit
     */
    showEdit:boolean;
    

    /**
    * El id del técnico que se editara    
    */
   
   @Input() tecnico_edit_id: number;

    /**
    * Recibe la información del técnico
    */
   getTecnico(): void {
    this.tecnicoService.getTecnico(this.id)
        .subscribe(tecnico => {
            this.tecnico = tecnico;
        });
  }

  /**    
     * Cancelala edición del técnico y se devuelve al componente que lo invoco
     */
    cancelEdition(): void {
     
     this.router.navigate(['/listarTecnicos',this.idAdmi]);
  }

  /**
   * Actualiza el técnico con la información
   */
    
   editTecnico(): void {     
    this.tecnicoService.updateTecnico(this.tecnico)
       .subscribe(() => {
           
           this.router.navigate(['/listarTecnicos',this.idAdmi]);            
           
           
       });
}

/**
 * Muestra el edit de técnico
 * @param tecnico_edit_id id del técnico del que se mostrará el edit
 */

showHideEdit(tecnico_edit_id: number): void {
  if (!this.showEdit || (this.showEdit && (tecnico_edit_id != this.tecnico_edit_id))) {
      this.showEdit = true;
      this.tecnico_edit_id = tecnico_edit_id;
  }
  else {
      this.showEdit = false;
  }
}

    /**
    * Función que inicializa el componente
    */

    ngOnInit() {
      this.tecnico= new Tecnico();
      this.getTecnico();
    }
  /**
   * Función que se ejecuta cada vez que el tecnico sufre cambios
   */
       
   ngOnChanges() {
    this.ngOnInit();
  }

}
