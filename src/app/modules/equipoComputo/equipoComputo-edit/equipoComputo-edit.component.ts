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
export class equipoComputoEditComponent implements OnInit {


  id:number;
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
     * The tecnico to create
     */
  
    equipoComputo: equipoComputo;
    showEdit:boolean;
    

    /**
    * The id of the tecnico that the user wants to edit
    * This is passed as a parameter by the parent component
    */
   @Input() equipoComputo_edit_id: number;

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
   getEquipoComputo(): void {
    this.equipoService.getequipoComputo(this.id)
        .subscribe(equipoComputo => {
            this.equipoComputo = equipoComputo;
        });
  }

  /**    
     * Informs the parent component that the user no longer wants to update the tecnico
     */
    cancelEdition(): void {
     this.cancel.emit();
     this.router.navigate(['/listarEquipos',this.idAdmi]);
  }


    /**
    * Updates the tecnico's information
    */
   editEquipoComputo(): void {     
    this.equipoService.updateequipoComputo(this.equipoComputo)
       .subscribe(() => {
           this.update.emit(); 
           this.router.navigate(['/listarEquipos',this.idAdmi]);            
           
           
       });
}

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