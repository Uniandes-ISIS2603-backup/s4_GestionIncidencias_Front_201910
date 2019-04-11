import { Component, OnInit, Input } from '@angular/core';
import {IncidenciaService} from '../incidencia.service'
import { ActivatedRoute, Params } from '@angular/router';
import {IncidenciaDetail} from '../incidencia-detail'
import {Incidencia} from '../Incidencia'
@Component({
  selector: 'app-clientes-detail',
  templateUrl: './clientes-detail.component.html',
  styleUrls: ['./clientes-detail.component.css']
})
export class ActuacionDetailComponent implements OnInit {

  constructor( private actuacionService : IncidenciaService,
  private route : ActivatedRoute ) { }

/**
  * la actuacion que se va a mostrar
  */
  incidenciaDetail:IncidenciaDetail;



  /**
  * la fecha de la actuacion obtenida del path
  */
  @Input() incidecnia_id: number;

  loader: any;
  /**
  * Le hace retriev a la informacion de la actuacion y espero  que se halla arreglado el error
  */
  getActuacionDetail(): void {

    this.actuacionService.getIncidenciaDetail(this.incidecnia_id)
      .subscribe(o => {
        this.incidenciaDetail = o
      });
  }

  /**
   * 
   * @param params 
   */
  onLoad(params) {

    
    console.log(" en detail " + this.incidecnia_id);
    this.incidenciaDetail = new IncidenciaDetail();
    this.getActuacionDetail;
  }


  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
  }

  ngOnDestroy() {
    this.loader.unsubscribe();
  }
}