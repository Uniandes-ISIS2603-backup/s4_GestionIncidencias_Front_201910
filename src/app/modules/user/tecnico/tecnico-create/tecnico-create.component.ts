import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

import { Tecnico } from '../tecnico';
import { TecnicoService} from '../tecnico.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tecnico-create',
  templateUrl: './tecnico-create.component.html',
  styleUrls: ['./tecnico-create.component.css']
})

export class TecnicoCreateComponent implements OnInit {

  id:number;

  
  constructor(
    private tecnicoService: TecnicoService,
    private toastrService: ToastrService,
    private router:Router,
    private activated:ActivatedRoute
    ) {
      this.activated.params.subscribe(  params =>{    
        this.id=params['id'] ;
        console.log(this.id);
      });


    }

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
   * that the user created a new tecnico
   */
   @Output() create = new EventEmitter();


   /**
    * Creates a new tecnico
    */
     createTecnico(): Tecnico {
      this.tecnicoService.createTecnico(this.tecnico)
          .subscribe((tecnico) => {
              this.tecnico = tecnico;
              this.create.emit();    
              this.router.navigate(['/listarTecnicos',this.id]);                
          });
      return this.tecnico;    
    }

    /**
      * Informs the parent component that the user no longer wants to create an tecnico
      */
     cancelCreation(): void {
      this.router.navigate(['/listarTecnicos',this.id]);
    }
  
     /**
      * This function will initialize the component
      */

    ngOnInit() {
      this.tecnico= new Tecnico();
    }

}
