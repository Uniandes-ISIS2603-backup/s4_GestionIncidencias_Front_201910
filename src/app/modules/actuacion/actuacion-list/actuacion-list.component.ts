import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/filter';
import {Actuacion} from '../actuacion';
import {ActuacionService} from '../actuacion.service';

@Component({
    selector: 'app-actuacion-list',
    templateUrl: './actuacion-list.component.html',
    styleUrls: ['./actuacion-list.component.css']
})
export class BookListComponent implements OnInit {

    /**
    * La lista de actuaciones 
    */
    @Input() actuaciones: Actuacion[];

    /**
    *El  constructor del componente
    */
    constructor(private actuacionService: ActuacionService, private route: ActivatedRoute) {}

    allactuaciones: string = 'no';
    /**
    * This obtiene todas las actuaciones de una incidencia
    */
    getActuaciones(): void {
        this.actuacionService.getActuaciones()
            .subscribe(actuacions => {
                this.actuaciones = actuacions;
            });
    }

      /**
    * El metodo incializa el componente
    */
   ngOnInit() {
    this.route.queryParams
        .filter(params => params.allbooks)
        .subscribe(params => {
            console.log(params);

            this.allactuaciones = params.allbooks;
            console.log(this.allactuaciones);
        });
    if (this.allactuaciones == 'yes') {
        console.log("allactuaciones");

        this.getActuaciones();
    }
}
}