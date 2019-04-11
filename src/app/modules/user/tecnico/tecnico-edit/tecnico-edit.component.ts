import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { TecnicoService } from '../tecnico.service';

import { ToastrService} from 'ngx-toastr';
import { Tecnico } from '../tecnico';



@Component({
  selector: 'app-tecnico-edit',
  templateUrl: './tecnico-edit.component.html',
  styleUrls: ['./tecnico-edit.component.css']
})
export class TecnicoEditComponent implements OnInit {

  /**
    * The component's constructor
    * @param tecnicoService The tecnico's service
    * @param toastrService The toastr to show messages to the user 
    */
     constructor(
      private tecnicoService: TecnicoService,
      private toastrService: ToastrService
    ) {}
  
    /**
     * The tecnico to create
     */
  
    tecnico: Tecnico;
    showEdit:boolean;
    

    /**
    * The id of the tecnico that the user wants to edit
    * This is passed as a parameter by the parent component
    */
   @Input() tecnico_edit_id: number;

   /**
   * The output which tells the parent component
   * that the user no longer wants to create an tecnico
   */
   @Output() cancel = new EventEmitter();

   /**
   * The output which tells the parent component
   * that the user updated a new tecnico
   */
   @Output() update = new EventEmitter();
  



    /**
    * Retrieves the information of the tecnico
    */
   getTecnico(): void {
    this.tecnicoService.getTecnico(this.tecnico_edit_id)
        .subscribe(tecnico => {
            this.tecnico = tecnico;
        });
  }

  /**    
     * Informs the parent component that the user no longer wants to update the tecnico
     */
    cancelEdition(): void {
     this.cancel.emit();
  }


    /**
    * Updates the tecnico's information
    */
   editTecnico(): void {     
    this.tecnicoService.updateTecnico(this.tecnico)
       .subscribe(() => {
           this.update.emit();             
           
           
       });
}

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
    * The function which initializes the component
    */

    ngOnInit() {
      this.tecnico= new Tecnico();
      this.getTecnico();
    }

      /**
    * The function which is called every time the user chooses to edit a different tecnico
    */
   ngOnChanges() {
    this.ngOnInit();
}

}
