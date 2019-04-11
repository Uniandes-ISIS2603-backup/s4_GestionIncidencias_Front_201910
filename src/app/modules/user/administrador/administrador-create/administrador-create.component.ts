import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {AdministradorService} from '../administrador.service';
import {Administrador} from '../administrador';

/**
 * Componente para el administrador
 * @author Juan Pablo Correa Puerta
 */
@Component({
  selector: 'app-administrador-create',
  templateUrl: './administrador-create.component.html',
  styleUrls: ['./administrador-create.component.css']
})
export class AdministradorCreateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
