import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { TecnicoService } from '../tecnico.service';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';
import { Tecnico } from '../tecnico';

@Component({
  selector: 'app-tecnico-list',
  templateUrl: './tecnico-list.component.html',
  styleUrls: ['./tecnico-list.component.css']
})
export class TecnicoListComponent implements OnInit {
   /**
    * Constructor for the component
    * @param tecnicoService The author's services provider
    */
   constructor(
    private tecnicoService: TecnicoService,
    private modalDialogService: ModalDialogService,
    private viewRef: ViewContainerRef,
    private toastrService: ToastrService) {}

  /**
    * List of tecnicos
    */

   tecnicos:Tecnico[];

  /**
    * Shows or hides the create component
    */
   showCreate: boolean;

   /**
    * Shows or hides the edit component.
    */
   showEdit: boolean;

   /**
    * The id of the tecnico being edited.
    */
   tecnico_edit_id: number;


    /**
     * Shoy the list of tecnicos
     */

    shows: boolean=true;

    /**
    * Asks the service to update the list of tecnicos
    */
     getTecnicos(): void {
      this.tecnicoService.getTecnicos()
          .subscribe(tecnicos => {
              this.tecnicos = tecnicos;

          });
    }

    updateTecnico(): void {
      this.showEdit = false;
      location.reload();
  }


      /**
    * Shows or hides the create component
    */
   showHideEdit(tecnico_id: number): void {
    if (!this.showEdit || (this.showEdit && tecnico_id != this.tecnico_edit_id)) {        
        this.tecnico_edit_id = tecnico_id;
        this.showEdit = !this.showEdit;
    }
    else {
        this.showEdit = !this.showEdit;
    }
}

   /**
      * This will initialize the component by retrieving the list of tecnicos from the service
      * This method will be called when the component is created
      */
       ngOnInit() {
        this.showCreate = false;
        this.showEdit = false;
        this.getTecnicos();
      }
      ngOnChanges() {
        console.log("Entering in changes");
        location.reload();
        this.ngOnInit();
      }
}
