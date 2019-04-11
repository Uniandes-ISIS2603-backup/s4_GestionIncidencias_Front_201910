import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

import { equipoComputo } from '../equipoComputo';
import { equipoComputoService} from '../equipoComputo.service'

@Component({
  selector: 'app-equipoComputo-create',
  templateUrl: './equipoComputo-create.component.html',
  styleUrls: ['./equipoComputo-create.component.css']
})

export class equipoComputoCreateComponent implements OnInit {
  constructor(
    private editorialService: equipoComputoService,
    private toastrService: ToastrService
    ) {}

  /**
   * The new equipoComputo
   */
    equipoComputo:equipoComputo;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create a equipoComputo
    */
   @Output() cancel = new EventEmitter();

   /**
   * The output which tells the parent component
   * that the user created a new editorial
   */
   @Output() create = new EventEmitter();


   /**
    * Creates a new equipoComputo
    */
     createequipoComputo(): equipoComputo {
      this.editorialService.createequipoComputo(this.equipoComputo)
          .subscribe((equipoComputo) => {
              this.equipoComputo = equipoComputo;
              this.create.emit();              
          });
      return this.equipoComputo;    
    }

    /**
      * Informs the parent component that the user no longer wants to create an editorial
      */
     cancelCreation(): void {
      this.cancel.emit();
    }
  
     /**
      * This function will initialize the component
      */

    ngOnInit() {
      this.equipoComputo= new equipoComputo();
    }

}
