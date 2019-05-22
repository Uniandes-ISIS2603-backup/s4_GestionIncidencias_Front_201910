import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

import { equipoComputo } from '../equipoComputo'
import { equipoComputoService} from '../equipoComputo.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-equipoComputo-create',
  templateUrl: './equipoComputo-create.component.html',
  styleUrls: ['./equipoComputo-create.component.css']
})

export class equipoComputoCreateComponent implements OnInit {

  id:number;
  constructor(
    private equipoService: equipoComputoService,
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
    equipo:equipoComputo;

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
     createEquipo(): equipoComputo {
      this.equipoService.createequipoComputo(this.equipo)
          .subscribe((equipo) => {
              this.equipo = equipo;
              this.create.emit();    
              this.router.navigate(['/listarEquipos',this.id]);                
          });
      return this.equipo;    
    }

    /**
      * Informs the parent component that the user no longer wants to create an tecnico
      */
     cancelCreation(): void {
      this.router.navigate(['/listarEquipos',this.id]);
    }
  
     /**
      * This function will initialize the component
      */

    ngOnInit() {
      this.equipo= new equipoComputo();
    }

}