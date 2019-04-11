import { Component, OnInit, Input } from '@angular/core';
import {ActuacionService} from '../actuacion.service'
import { ActivatedRoute, Params } from '@angular/router';
import {ActuacionDetail} from '../actuacion-detail'
import {Actuacion} from '../actuacion'
@Component({
  selector: 'app-actuacion-detail',
  templateUrl: './actuacion-detail-list.html',
  styleUrls: ['./actuacion-detail-list.css']
})
export class ActuacionDetailComponent implements OnInit {

  constructor( private actuacionService : ActuacionService,
  private route : ActivatedRoute ) { }

/**
  * la actuacion que se va a mostrar
  */
  actuacionDetail: ActuacionDetail;



  /**
  * la fecha de la actuacion obtenida del path
  */
  @Input() actuacion_fecha: any;

  loader: any;
  /**
  * Le hace retriev a la informacion de la actuacion y espero  que se halla arreglado el error
  */
  getActuacionDetail(): void {

    this.actuacionService.getActuacionDetail(this.actuacion_fecha)
      .subscribe(o => {
        this.actuacionDetail = o
      });
  }

  /**
   * 
   * @param params 
   */
  onLoad(params) {

    
    console.log(" en detail " + this.actuacion_fecha);
    this.actuacionDetail = new ActuacionDetail();
    this.getActuacionDetail;
  }


  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
  }

  ngOnDestroy() {
    this.loader.unsubscribe();
  }
}