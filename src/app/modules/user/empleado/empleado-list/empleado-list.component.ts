import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { EmpleadoService } from '../empleado.service';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';
import { Empleado } from '../empleado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent implements OnInit {

  /**
    * Constructor for the component
    * @param empleadoService The author's services provider
    */
  constructor(
    private empleadoService: EmpleadoService,
    private modalDialogService: ModalDialogService,
    private viewRef: ViewContainerRef,
    private toastrService: ToastrService) {}

  /**
    * List of empleados
    */

   empleados:Empleado[];


    /**
    * Asks the service to update the list of empleados
    */
     getEmpleados(): void {
      this.empleadoService.getEmpleados()
          .subscribe(empleados => {
              this.empleados = empleados;
          });
    }


  ngOnInit() {
  }

}
