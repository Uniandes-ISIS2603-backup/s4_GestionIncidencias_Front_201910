import {Component, OnInit, OnDestroy, ViewChild, ViewContainerRef} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';

import {IncidenciaService} from '../incidencia.service';
import {Incidencia} from '../Incidencia';
import {IncidenciaDetail} from '../incidencia-detail';


import { ActuacionEditComponent } from '../../actuacion/actuacion-edit/actuacion-edit.component';



@Component({
    selector: 'app-incidencia-detail',
    templateUrl: './incidencia-detail.component.html',
    styleUrls: ['./incidecnia-detail.component.css']
})
export class BookDetailComponent  {

    }