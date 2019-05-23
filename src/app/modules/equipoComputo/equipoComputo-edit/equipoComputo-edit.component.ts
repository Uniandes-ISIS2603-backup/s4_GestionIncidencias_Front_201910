import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { equipoComputoService } from '../equipoComputo.service';

import { ToastrService} from 'ngx-toastr';
import { equipoComputo } from '../equipoComputo';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-equipoComputo-edit',
  templateUrl: './equipoComputo-edit.component.html',
  styleUrls: ['./equipoComputo-edit.component.css']
})

/**
 * Crea un editar equipo computo
 */
export class equipoComputoEditComponent implements OnInit {

  /**
   * Id del equipo que se esta creando
   */
  id:number;


  /**
   * iid del admi que esta editando
   */
  idAdmi:number;

     constructor(
      private equipoService:equipoComputoService,
      private toastrService: ToastrService,
      private router: Router,
      private activated: ActivatedRoute
    ) {
      this.activated.params.subscribe(  params =>{    
        this.id=params['id'] ;
        this.idAdmi=params['idAdmi'];
        console.log(this.id);
        this.getEquipoComputo();
      });

    }
  
    /**
     * El equipo computo a crear
     */
  
    equipoComputo: equipoComputo;
    /**
     * Muestra el editar
     */
    showEdit:boolean;
    

    /**
    * The id of the tecnico that the user wants to edit
    * This is passed as a parameter by the parent component
    */
   @Input() equipoComputo_edit_id: number;

   
    /**
    * Retrieves the information of the tecnico
    */
   getEquipoComputo(): void {
    this.equipoService.getequipoComputo(this.id)
        .subscribe(equipoComputo => {
            this.equipoComputo = equipoComputo;
        });
  }

  /**    
     * Cancela la edición y vuelve al componete que lo invoco
     */
    cancelEdition(): void {
     
     this.router.navigate(['/listarEquipos',this.idAdmi]);
  }


    /**
    * Actualiza la información del equipo computo
    */
   editEquipoComputo(): void {     
    this.equipoService.updateequipoComputo(this.equipoComputo)
       .subscribe(() => {
           
           this.router.navigate(['/listarEquipos',this.idAdmi]);            
           
           
       });
}

/**
 * Muestra el editar   
 * @param equipoComputo_edit_id 
 */

showHideEdit(equipoComputo_edit_id: number): void {
  if (!this.showEdit || (this.showEdit && (equipoComputo_edit_id != this.equipoComputo_edit_id))) {
      this.showEdit = true;
      this.equipoComputo_edit_id = equipoComputo_edit_id;
  }
  else {
      this.showEdit = false;
  }
}

    /**
    * The function which initializes the component
    */

    ngOnInit() {
      this.equipoComputo= new equipoComputo();
      this.getEquipoComputo();
    }

      /**
    * The function which is called every time the user chooses to edit a different tecnico
    */
   ngOnChanges() {
    this.ngOnInit();
}

}