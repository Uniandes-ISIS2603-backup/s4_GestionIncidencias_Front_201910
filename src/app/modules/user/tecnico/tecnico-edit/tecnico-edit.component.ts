import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { TecnicoService } from '../tecnico.service';
import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';
import { ToastrService} from 'ngx-toastr';
import { Tecnico } from '../tecnico';


@Component({
  selector: 'app-tecnico-edit',
  templateUrl: './tecnico-edit.component.html',
  styleUrls: ['./tecnico-edit.component.css']
})
export class TecnicoEditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
