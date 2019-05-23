import {Component, OnInit, Output, EventEmitter}  from '@angular/core';

import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import {IncidenciaService} from '../Incidencia.service';

import {Incidencia} from '../Incidencia';



@Component({
    selector: 'app-incidencia-create',
    templateUrl: './incidencia-create.component.html',
    styleUrls: ['./incidencia-create.css'],
    providers: [DatePipe]
})
export class IncidenciaCreateComponent implements OnInit {

    id:number;
    constructor(
      private incidenciaService: IncidenciaService,
      private toastrService: ToastrService,
      private router:Router,
      private activated: ActivatedRoute
      ) {this.activated.params.subscribe(  params =>{    
        this.id=params['id'] ;
        console.log(this.id);
      });
    }
  
  
    /**
     * The new empleado
     */
      incidencia:Incidencia;
  
      /**
      * The output which tells the parent component
      * that the user no longer wants to create an empleado
      */
     @Output() cancel = new EventEmitter();
  
     /**
     * The output which tells the parent component
     * that the user created a new empleado
     */
     @Output() create = new EventEmitter();
  
  
     /**
      * Creates a new empleado
      */
     createIncidencia(): Incidencia {

      this.incidenciaService.createIncidencia(this.incidencia)
          .subscribe((empleado) => {
              this.incidencia = empleado;
              this.create.emit();        
              this.router.navigate(['/listarIncidencias',this.id]);                
          }
          );
      
      return this.incidencia;    
    }
  
    /**
      * Informs the parent component that the user no longer wants to create an emplado
      */
     cancelCreation(): void {
      this.router.navigate(['/listarIncidencias',this.id]);
    }
    
     /**
      * This function will initialize the component
      */
  
    ngOnInit() {
      this.incidencia= new Incidencia();
    }
}
