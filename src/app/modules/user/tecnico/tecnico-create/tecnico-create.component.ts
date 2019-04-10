import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Tecnico } from '../tecnico';
import {ToastrService} from 'ngx-toastr';
import { TecnicoService} from '../tecnico.service'

@Component({
  selector: 'app-tecnico-create',
  templateUrl: './tecnico-create.component.html',
  styleUrls: ['./tecnico-create.component.css']
})

export class TecnicoCreateComponent implements OnInit {
  constructor(
    private editorialService: TecnicoService,
    private toastrService: ToastrService
    ) {}

  /**
   * The new tecnico
   */
    tecnico:Tecnico;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create a tecnico
    */
   @Output() cancel = new EventEmitter();

   /**
   * The output which tells the parent component
   * that the user created a new editorial
   */
   @Output() create = new EventEmitter();


   /**
    * Creates a new tecnico
    */
     createTecnico(): Tecnico {
      this.editorialService.createTecnico(this.tecnico)
          .subscribe((tecnico) => {
              this.tecnico = tecnico;
              this.create.emit();
              this.toastrService.success("El técnico fue creado", "Creación del técnico");
          }, err => {
              this.toastrService.error(err, "Error");
          });
      return this.tecnico;    
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
      this.tecnico= new Tecnico();
    }

}
