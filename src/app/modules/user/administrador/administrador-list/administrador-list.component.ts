import { Component, OnInit } from '@angular/core';
import { AdministradorService } from '../administrador.service';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';
import { Administrador } from '../administrador';

/**
 * Componente que lista los administradores
 */
@Component({
  selector: 'app-administrador-list',
  templateUrl: './administrador-list.component.html',
  styleUrls: ['./administrador-list.component.css']
})
export class AdministradorListComponent implements OnInit {
/**
    * Constructor for the component
    * @param administradorService The author's services provider
    */
   constructor(
    private administradorService: AdministradorService,
    private modalDialogService: ModalDialogService,
    private toastrService: ToastrService) {}

  /**      
    * List of administradores
    */

   administradores:Administrador[];


    /**
     * Shoy the list of administradores
     */

   shows: boolean=true;

   /**
    * Shows or hides the create component
    */
   showCreate: boolean;

   /**
    * Shows or hides the edit component.
    */
   showEdit: boolean;

   /**
    * The id of the administrador being edited.
    */
   administrador_edit_id: number;

    /**
    * Asks the service to update the list of administradores
    */
     getAdministradores(): void {
      this.administradorService.getAdministradores()
          .subscribe(administradores => {
              this.administradores = administradores;
          });
    }
  
    updateAdministrador(): void { 
      this.showEdit = false;
      location.reload();
  }

     /**
    * Shows or hides the create component
    */
   showHideEdit(editorial_id: number): void {
    if (!this.showEdit || (this.showEdit && editorial_id != this.administrador_edit_id)) {        
        this.administrador_edit_id = editorial_id;
        this.showEdit = !this.showEdit;
    }
    else {
        this.showEdit = !this.showEdit;
    }
}
 
  /**
    * This will initialize the component by retrieving the list of administradores from the service
    * This method will be called when the component is created
    */
     ngOnInit() {       
      this.showCreate = false;
      this.showEdit = false;
      this.getAdministradores();
  }

  ngOnChanges() {    
    this.ngOnInit();
    this.getAdministradores();
  }
}