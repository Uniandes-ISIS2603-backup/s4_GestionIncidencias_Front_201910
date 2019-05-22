import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IncidenciaService } from '../../Incidencias/incidencia.service';
import { Actuacion } from '../actuacion';

@Component({
  selector: 'app-actuacion-incidencia',
  templateUrl: './actuacion-incidencia.component.html',
  styleUrls: ['./actuacion-incidencia.component.css']
})
export class ActuacionIncidenciaComponent implements OnInit {


  actuacion:Actuacion;

  constructor(private router:Router,
    private  activated:ActivatedRoute,
    private incidenciasService:IncidenciaService) {       

  }

  ngOnInit() {

  }

}
