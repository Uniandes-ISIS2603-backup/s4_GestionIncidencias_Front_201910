import { Component, OnInit, ViewContainerRef, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { equipoComputoService } from '../equipoComputo.service';
import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';
import { ToastrService} from 'ngx-toastr';
import { equipoComputo } from '../equipoComputo';



@Component({
  selector: 'app-equipoComputo-edit',
  templateUrl: './equipoComputo-edit.component.html',
  styleUrls: ['./equipoComputo-edit.component.css']
})
export class equipoComputoEditComponent implements OnInit {

  /**
    * The component's constructor
    * @param equipoComputoService The editorial's service
    * @param toastrService The toastr to show messages to the user 
    */
     constructor(
      private equipoComputoService: equipoComputoService,
      private toastrService: ToastrService
    ) {}
  
    /**
     * The equipoComputo to create
     */
  
    equipoComputo: equipoComputo;

    /**
    * The id of the equipoComputo that the user wants to edit
    * This is passed as a parameter by the parent component
    */
   @Input() equipoComputo_id: number;

   /**
   * The output which tells the parent component
   * that the user no longer wants to create an equipoComputo
   */
   @Output() cancel = new EventEmitter();

   /**
   * The output which tells the parent component
   * that the user updated a new equipoComputo
   */
   @Output() update = new EventEmitter();
  
    /**
    * Retrieves the information of the equipoComputo
    */
   getequipoComputo(): void {
    this.equipoComputoService.getequipoComputo(this.equipoComputo_id)
        .subscribe(equipoComputo => {
            this.equipoComputo = equipoComputo;
        });
}

    /**
    * The function which initializes the component
    */

    ngOnInit() {
      this.equipoComputo= new equipoComputo();
      this.getequipoComputo();
    }

      /**
    * The function which is called every time the user chooses to edit a different equipoComputo
    */
   ngOnChanges() {
    this.ngOnInit();
}

}
