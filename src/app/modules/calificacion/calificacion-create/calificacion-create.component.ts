import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

import { calificacion } from '../calificacion';
import { calificacionService} from '../calificacion.service'

@Component({
  selector: 'app-calificacion-create',
  templateUrl: './calificacion-create.component.html',
  styleUrls: ['./calificacion-create.component.css']
})

export class calificacionCreateComponent implements OnInit {
  constructor(
    private editorialService: calificacionService,
    private toastrService: ToastrService
    ) {}

  /**
   * The new calificacion
   */
    calificacion:calificacion;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create a calificacion
    */
   @Output() cancel = new EventEmitter();

   /**
   * The output which tells the parent component
   * that the user created a new editorial
   */
   @Output() create = new EventEmitter();


   /**
    * Creates a new calificacion
    */
     createcalificacion(): calificacion {
      this.editorialService.createcalificacion(this.calificacion)
          .subscribe((calificacion) => {
              this.calificacion = calificacion;
              this.create.emit();              
          });
      return this.calificacion;    
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
      this.calificacion= new calificacion();
    }

}
