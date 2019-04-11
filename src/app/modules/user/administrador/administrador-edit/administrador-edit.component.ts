import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import { Administrador } from '../administrador';
import { AdministradorService } from '../administrador.service';

@Component({
  selector: 'app-administrador-edit',
  templateUrl: './administrador-edit.component.html',
  styleUrls: ['./administrador-edit.component.css']
})
export class AdministradorEditComponent implements OnInit {
/**
    * The component's constructor
    * @param AdministradorService The administrador's service
    * @param toastrService The toastr to show messages to the user 
    */
   constructor(
    private administradorService: AdministradorService,
    private toastrService: ToastrService
) {}
   /**
    * The id of the administrador that the user wants to edit
    * This is passed as a parameter by the parent component
    */
   @Input() administrador_edit_id: number;

   /**
   * The output which tells the parent component
   * that the user no longer wants to create an administrador
   */
   @Output() cancel = new EventEmitter();

   /**
   * The output which tells the parent component
   * that the user updated a new administrador
   */
   @Output() update = new EventEmitter();

   /**
    * The administrador to edit 
    */
  administrador: Administrador;

  showEdit:boolean;

   /**
    * Retrieves the information of the administrador
    */

   getAdministrador(): void {
    this.administradorService.getAdministrador(this.administrador_edit_id)
        .subscribe(administrador => {
            this.administrador = administrador;
        });
  }
  
   /**
    * The function which initializes the component
    */  

  ngOnInit() {
    this.administrador= new Administrador();
    this.getAdministrador();
  }


/**
    * Updates the editorial's information
    */
   editAdministrador(): void {
     this.administradorService.updateAdministradors(this.administrador)
        .subscribe(() => {
            this.update.emit();    
            
            
        });
}

/**    
    * Informs the parent component that the user no longer wants to update the editorial
    */
   cancelEdition(): void {
    this.cancel.emit();
}

  

showHideEdit(administrador_edit_id: number): void {
  if (!this.showEdit || (this.showEdit && administrador_edit_id != this.administrador_edit_id)) {
      this.showEdit = true;
      this.administrador_edit_id = administrador_edit_id;
  }
  else {
      this.showEdit = false;
  }
}
   /**
    * The function which is called every time the user chooses to edit a different editorial
    */
   ngOnChanges() {
    this.ngOnInit();
  }
}

