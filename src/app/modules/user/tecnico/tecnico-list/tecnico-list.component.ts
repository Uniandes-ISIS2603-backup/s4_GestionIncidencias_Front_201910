import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';
import { TecnicoService } from '../tecnico.service';
import { Tecnico } from '../tecnico';
@Component({
  selector: 'app-tecnico-list',
  templateUrl: './tecnico-list.component.html',
  styleUrls: ['./tecnico-list.component.css']
})
export class TecnicoListComponent implements OnInit {

   /**
    * Constructor for the component
    * @param tecnicoService The author's services provider
    */
   constructor(
    private tecnicoService: TecnicoService,
    private modalDialogService: ModalDialogService,
    private viewRef: ViewContainerRef,
    private toastrService: ToastrService) {}
    

    showCreate:boolean;
    showEdit:boolean;

    /**
    * List of tecnicos
    */

    tecnicos:Tecnico[];
   
    /**
    * Asks the service to update the list of empleados
    */
   getTecnicos(): void {
    this.tecnicoService.getTecnicos()
        .subscribe(tecnicos => {
            this.tecnicos = tecnicos;
        });
  }

      /**
    * This will initialize the component by retrieving the list of editorials from the service
    * This method will be called when the component is created
    */
   ngOnInit() {
    this.showCreate = false;
    this.showEdit = false;
    this.getTecnicos();
}
}
