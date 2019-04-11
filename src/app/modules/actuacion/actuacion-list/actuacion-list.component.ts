import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import 'rxjs/add/operator/filter';
import { ActuacionService } from '../actuacion.service';
import {Actuacion} from '../actuacion';
	import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';

    @Component({
    selector: 'app-actuacion-list',	  
    templateUrl: './actuacion-list.component.html',	 
    
    styleUrls: ['./actuacion-list.component.css']
})

    export class ActuacionListComponent {


        @Input() actuaciones: Actuacion[];

        /**
         * El  constructor del componente
         *  */
        constructor(private actuacionService: ActuacionService, private route: ActivatedRoute) {}

        allactuaciones: string = 'no';

        getActuacion(): void {
            this.actuacionService.getActuaciones()	     
                .subscribe(actuacions => {	          
                    this.actuaciones = actuacions;	            
                });	         

  
    }
}