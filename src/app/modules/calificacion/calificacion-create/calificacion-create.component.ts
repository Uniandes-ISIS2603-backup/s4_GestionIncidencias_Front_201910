import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

import { calificacion } from '../calificacion';
import { calificacionService} from '../calificacion.service'

/**
 * Componente que representa la creacion de una calificacion
 */
@Component({
  selector: 'app-calificacion-create',
  templateUrl: './calificacion-create.component.html',
  styleUrls: ['./calificacion-create.component.css']
})

/**
 * Metodo constructor
 */
export class calificacionCreateComponent implements OnInit {
  constructor(
    private editorialService: calificacionService,
    private toastrService: ToastrService
    ) {}

  /**
   * La calificacion nueva
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
    * Crea una nueva calificacion
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
    * Le indica al componente padre que el usuario
    * no quiere crear una calificacion
    */
     cancelCreation(): void {
      this.cancel.emit();
    }
  
    /**
      * Esta funcion inicializa el componente
      */
    ngOnInit() {
      this.calificacion= new calificacion();
    }

}
