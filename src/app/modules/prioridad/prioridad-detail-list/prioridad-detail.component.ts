import { Component, OnInit, Input } from '@angular/core';
import {PrioridadService} from '../prioridad.service'
import { ActivatedRoute, Params } from '@angular/router';
import {PrioridadDetail} from '../prioridad-detail'
import {Prioridad} from '../prioridad'
@Component({
  selector: 'app-prioridad-detail',
  templateUrl: './prioridad-detail.component.html'
})
export class PrioridadDetailComponent implements OnInit {

  constructor( private prioridadService : PrioridadService,
  private route : ActivatedRoute ) { }

/**
  * la Prioridad que se va a mostrar
  */
  prioridadDetail: PrioridadDetail;



  /**
  * la fecha de la Prioridad obtenida del path
  */
  @Input() prioridad_tipoPrioridad: any;

  loader: any;
  /**
  * Le hace retriev a la informacion de la Prioridad y espero  que se halla arreglado el error
  */
  getPrioridadDetail(): void {

    this.prioridadService.getPrioridadDetail(this.prioridad_tipoPrioridad)
      .subscribe(o => {
        this.prioridadDetail = o
      });
  }

  /**
   * 
   * @param params 
   */
  onLoad(params) {

    
    console.log(" en detail " + this.prioridad_tipoPrioridad);
    this.prioridadDetail = new PrioridadDetail();
    this.getPrioridadDetail;
  }


  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
  }

  ngOnDestroy() {
    this.loader.unsubscribe();
  }
}