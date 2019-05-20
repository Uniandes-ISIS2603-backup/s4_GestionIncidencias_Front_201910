import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { EmpleadoService } from '../empleado.service';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';
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


  id:number;

  /**
    * Constructor for the component
    * @param empleadoService The author's services provider
    */
  constructor(
    private empleadoService: EmpleadoService,
    private modalDialogService: ModalDialogService,
    private viewRef: ViewContainerRef,
    private toastrService: ToastrService,
    private global: Globals,
    private dialog: MatDialog,
    private router: Router,
    private activated: ActivatedRoute) {
      this.activated.params.subscribe(  params =>{    
        this.id=params['id'] ;
        console.log(this.id);      
      
      });
    }

  /**      
    * List of empleados
    */

   empleados:Empleado[];


    /**
     * Shoy the list of empleados
     */

   shows: boolean=true;

   /**
    * Shows or hides the create component
    */
   showCreate: boolean;

   /**
    * Shows or hides the edit component.
    */
   showEdit: boolean;

   /**
    * The id of the empleado being edited.
    */
   empleado_edit_id: number;

    /**
    * Asks the service to update the list of empleados
    */
     getEmpleados(): void {
      this.empleadoService.getEmpleados()
          .subscribe(empleados => {
              this.empleados = empleados;
          });
    }
  
    updateEmpleado(): void { 
      this.showEdit = false;
      location.reload();
  }

     /**
    * Shows or hides the create component
    */
   showHideEdit(empleado_id: number): void {
        this.router.navigate(['editarEmpleado',empleado_id]);
    }
    
    deleteEmpleado(id:number):void{
      this.empleadoService.deleteEmpleado(id).subscribe(del=>{ this.getEmpleados()});      
      
    }


    goBack():void{
      this.router.navigate(['/menuAdministrador',this.id]);
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
