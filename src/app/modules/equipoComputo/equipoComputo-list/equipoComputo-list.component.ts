import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { equipoComputoService } from '../equipoComputo.service';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';
import { equipoComputo } from '../equipoComputo';

@Component({
  selector: 'app-equipoComputo-list',
  templateUrl: './equipoComputo-list.component.html',
  styleUrls: ['./equipoComputo-list.component.css']
})
export class equipoComputoListComponent implements OnInit {
   /**
    * Constructor for the component
    * @param equipoComputoService The author's services provider
    */
   constructor(
    private equipoComputoService: equipoComputoService,
    private modalDialogService: ModalDialogService,
    private viewRef: ViewContainerRef,
    private toastrService: ToastrService) {}

  /**
    * List of equipoComputos
    */

   equipoComputos:equipoComputo[];

  /**
    * Shows or hides the create component
    */
   showCreate: boolean;

   /**
    * Shows or hides the edit component.
    */
   showEdit: boolean;

   /**
    * The id of the equipoComputo being edited.
    */
   equipoComputo_edit_id: number;


    /**
     * Shoy the list of equipoComputos
     */

    shows: boolean=false;

    /**
    * Asks the service to update the list of equipoComputos
    */
     getequipoComputos(): void {
      this.equipoComputoService.getequipoComputos()
          .subscribe(equipoComputos => {
              this.equipoComputos = equipoComputos;
          });
    }

    updateequipoComputo(): void {
      this.showEdit = false;
  }

   /**
      * This will initialize the component by retrieving the list of empleados from the service
      * This method will be called when the component is created
      */
       ngOnInit() {
        this.showCreate = false;
        this.showEdit = false;
        this.getequipoComputos();
      }
}
