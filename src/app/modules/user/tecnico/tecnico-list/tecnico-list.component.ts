import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';
import { TecnicoService } from '../tecnico.service';
@Component({
  selector: 'app-tecnico-list',
  templateUrl: './tecnico-list.component.html',
  styleUrls: ['./tecnico-list.component.css']
})
export class TecnicoListComponent implements OnInit {

   /**
    * Constructor for the component
    * @param editorialService The author's services provider
    */
   constructor(
    private editorialService: TecnicoService,
    private modalDialogService: ModalDialogService,
    private viewRef: ViewContainerRef,
    private toastrService: ToastrService) {}

  ngOnInit() {
  }

}
