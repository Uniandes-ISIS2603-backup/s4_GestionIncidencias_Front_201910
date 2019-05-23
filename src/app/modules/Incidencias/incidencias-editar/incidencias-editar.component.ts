import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
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
    selector: 'app-incidencia-edit',
    templateUrl: './incidencia-edit.component.html',
    styleUrls: ['./incidencia-edit.component.css']
})
export class IncidenciaEditComponent implements OnInit {

    id:number;


    idAdmi:number;
    /**
      * The component's constructor
      * @param tecnicoService The tecnico's service
      * @param toastrService The toastr to show messages to the user 
      */
       constructor(
       
        private incidenciaService : IncidenciaService,
        private toastrService: ToastrService,
        private router: Router,
        private activated: ActivatedRoute,
        private empleadoService : EmpleadoService,
        private tecnicoService : TecnicoService,
        private equipoService : equipoComputoService 
      ) {
        this.activated.params.subscribe(  params =>{    
          this.id=params['id'] ;
          this.idAdmi=params['idAdmi'];
          console.log(this.id);
          this.getIncidencia();
        });
  
      }
    
      /**
       * The tecnico to create
       */
    
      incidencia: Incidencia;
      empleado : Empleado;
      tecnico : Tecnico;
      equipoComputo : equipoComputo;  


      //Todos los empleadeos, tecnicos y  equipos
      empleados: Empleado[];
      tecnicos : Tecnico[];
      equipos : equipoComputo[];

      showEdit:boolean;
      
  
      /**
      * The id of the tecnico that the user wants to edit
      * This is passed as a parameter by the parent component
      */
     @Input()incidencia_edit_id: number;
  
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
     getIncidencia(): void {
      this.incidenciaService.getIncIdenciaDetail(this.id)
          .subscribe(tecnico => {
              this.incidencia = tecnico;
          });
    }
  
    /**    
       * Informs the parent component that the user no longer wants to update the tecnico
       */
      cancelEdition(): void {
       this.cancel.emit();
       this.router.navigate(['/listarIncidencias',this.idAdmi]);
    }
  
  
      /**
      * Updates the tecnico's information
      */
     editIncidencia(): void {     
      this.incidenciaService.updateIncidencia(this.incidencia)
         .subscribe(() => {
             this.update.emit(); 
             this.router.navigate(['/listarIncidencias',this.idAdmi]);            
             
             
         });
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

  showHideEdit(tecnico_edit_id: number): void {
    if (!this.showEdit || (this.showEdit && (tecnico_edit_id != this.incidencia_edit_id))) {
        this.showEdit = true;
        this.incidencia_edit_id = tecnico_edit_id;
    }
    else {
        this.showEdit = false;
    }
  }
  
      /**
      * The function which initializes the component
      */
  
      ngOnInit() {
        this.incidencia= new Incidencia();
        this.getIncidencia();
        this.getEquipos();
        this.getEmpleados();
        this.getTecnicos();
      }
  
        /**
      * The function which is called every time the user chooses to edit a different tecnico
      */
     ngOnChanges() {
      this.ngOnInit();
  }
}
