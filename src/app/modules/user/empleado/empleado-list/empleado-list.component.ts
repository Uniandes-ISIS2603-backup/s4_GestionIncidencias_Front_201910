import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { EmpleadoService } from '../empleado.service';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import { ToastrService } from 'ngx-toastr';
import { Empleado } from '../empleado';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import { EmpleadoCreateComponent } from '../empleado-create/empleado-create.component';
import { Router } from '@angular/router'
import { Globals } from '../../../../globals';


@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent implements OnInit {


  /** 
   * atributo id para el empleado.
   */
  id:number;

  /**
   * Constructor del empleado
   * @param empleadoService  servicio del empleado
   * @param modalDialogService modal dialog service
   * @param viewRef view ref
   * @param toastrService muestra el mensaje del servicio del usuario
   * @param global global 
   * @param dialog dialog
   * @param router router
   * @param activated activated
   * @param toastr mensaje del usuario
   */
  constructor(
    private empleadoService: EmpleadoService,
    private modalDialogService: ModalDialogService,
    private viewRef: ViewContainerRef,
    private toastrService: ToastrService,
    private global: Globals,
    private dialog: MatDialog,
    private router: Router,
    private activated: ActivatedRoute,
    private toastr: ToastrService) {
      this.activated.params.subscribe(  params =>{    
        this.id=params['id'] ;
        console.log(this.id);      
      
      });
    }

  /**      
    * lista de empleados
    */

   empleados:Empleado[];


    /**
     * bollean de mostrar la lista de empleados
     */

   shows: boolean=true;

   /**
    * muestra u oculta la craecion de empleados
    */
   showCreate: boolean;

   /**
    * muestra u oculta la edicion de componentes
    */
   showEdit: boolean;

   /**
    * el id del empleado a sido editado
    */
   empleado_edit_id: number;

    /**
    * pregunta el servicio a actualizar en la lista de empleados
    */
     getEmpleados(): void {
      this.empleadoService.getEmpleados()
          .subscribe(empleados => {
              this.empleados = empleados;
          });
    }
  /**
   * metodo que actualiza la lista empleado
   */
    updateEmpleado(): void { 
      this.showEdit = false;
      location.reload();
  }

     /**
    * muestra u oculta la creacion de componentes
    */
   showHideEdit(empleado_id: number): void {
        this.router.navigate(['editarEmpleado',empleado_id,this.id]);
    }
    
    /**
     * metodo de eliminacion de un empleado de la lista
     */
    deleteEmpleado(id:number):void{
      this.empleadoService.deleteEmpleado(id).subscribe(del=>{ this.getEmpleados()
        this.toastr.success('El empleado se elimino','Borrar empleado');
      }
      );            
    }


    crearEmpleado(id:number):void{
      this.router.navigate(['/crearEmpleado',this.id]);
    }


    goBack():void{
      this.router.navigate(['/menuAdministrador',this.id]);
    }


    listarIncidencias(id:number):void{
      this.router.navigate(['/listarIncidenciaEmpleado',id,this.id]);
    }

  /**
    * This will initialize the component by retrieving the list of empleados from the service
    * This method will be called when the component is created
    */
     ngOnInit() {       
      this.showCreate = false;
      this.showEdit = false;
      this.getEmpleados();
  }

  ngOnChanges() {    
    this.ngOnInit();
    this.getEmpleados();
  }

  onCreate(){
    const dialogConfig= new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="60%";    
    this.dialog.open(EmpleadoCreateComponent,dialogConfig);
    console.log(this.global.logInAdmi);
  }
}  
