import {Component, OnInit, Output, EventEmitter}  from '@angular/core';

import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import {IncidenciaService} from '../Incidencia.service';
import {Empleado} from '../../user/empleado/empleado';
import {Tecnico} from '../../user/tecnico/tecnico';
import {Incidencia} from '../Incidencia';
import { equipoComputo } from '../../equipoComputo/equipoComputo';
import { equipoComputoService } from '../../equipoComputo/equipoComputo.service';
import { EmpleadoService } from '../../user/empleado/empleado.service';
import { TecnicoService } from '../../user/tecnico/tecnico.service';


@Component({
    selector: 'app-incidencias-create',
    templateUrl: './incidencias-crear.component.html',
   
  })


  export class IncidenciasComponent implements OnInit {


    id:number;

    constructor(
      private incidenciaService: IncidenciaService,
      private toastrService: ToastrService,
      private router:Router,
      private activated: ActivatedRoute,
      private empleadoService : EmpleadoService,
      private tecnicoService : TecnicoService,
      private equipoService : equipoComputoService 


      ) {this.activated.params.subscribe(  params =>{    
        this.id=params['id'] ;
        console.log(this.id);
      });
    }
  
  
    /**
     * The new empleado
     */
      incidencia:Incidencia;
      empleado : Empleado;
      tecnico : Tecnico;
      equipoComputo : equipoComputo;  
      idEquipoComputo:number;
      nuevaIncidencia : Incidencia;
      


      //Todos los empleadeos, tecnicos y  equipos
      empleados: Empleado[];
      tecnicos : Tecnico[];
      equipos : equipoComputo[];
  
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

      console.log('equipo computo '+ this.idEquipoComputo);
      this.empleadoService.getEmpleado(this.id).subscribe((e)=>{
        this.empleado=e;
      });
      this.equipoService.getequipoComputo(this.idEquipoComputo).subscribe((e)=>{
        this.equipoComputo=e;
      });

  this.incidencia.empleado = this.empleado;
  this.incidencia.equipoComputo = this.equipoComputo;

      this.incidenciaService.createIncidencia(this.incidencia)
          .subscribe((incidencia) => {
            
              this.nuevaIncidencia = incidencia;
              this.create.emit();         
                           
          }
          );
      
      return this.incidencia;    
    }

    /**
    * Retrieves the list of editorials in the BookStore
    */
   getEmpleados(): void {
    this.empleadoService.getEmpleados()
        .subscribe(empleado => {
            this.empleados = empleado;
        }, err => {
            this.toastrService.error(err, 'Error');
        });
}

getTecnicos(): void {
    this.tecnicoService.getTecnicos()
        .subscribe(empleado => {
            this.tecnicos = empleado;
        }, err => {
            this.toastrService.error(err, 'Error');
        });
}

getEquipos(): void {
    this.equipoService.getequipoComputos()                                                     
        .subscribe(empleado => {
            this.equipos = empleado;
        }, err => {
            this.toastrService.error(err, 'Error');
        });
}

    /**
      * Informs the parent component that the user no longer wants to create an emplado
      */
     cancelCreation(): void {
      this.router.navigate(['/listarIncidenciaEmpleado',this.id]);
    }
    
     /**
      * This function will initialize the component
      */
  

    ngOnInit() {
        
 
      this.incidencia= new Incidencia();
      this.getEquipos();
      this.getEmpleados();
      this.getTecnicos();
    }



  }