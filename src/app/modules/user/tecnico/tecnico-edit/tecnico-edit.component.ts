import { Component, OnInit, ViewContainerRef, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { TecnicoService } from '../tecnico.service';
import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';
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
    * @param tecnicoService The editorial's service
    * @param toastrService The toastr to show messages to the user 
    */
     constructor(
      private tecnicoService: TecnicoService,
      private toastrService: ToastrService
    ) {}
  
    /**
    * The id of the tecnico that the user wants to edit
    * This is passed as a parameter by the parent component
    */
   @Input() tecnico_id: number;

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
  
   getTecnico: void {
    this.editorialService.getEditorialDetail(this.editorial_id)
        .subscribe(editorial => {
            this.editorial = editorial;
        });
  }


  ngOnInit() {
  }

}
