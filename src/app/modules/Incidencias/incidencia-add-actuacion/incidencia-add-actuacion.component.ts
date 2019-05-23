import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ActuacionR } from '../ActuacionR';
import { IncidenciaService } from '../incidencia.service';
import { Incidencia } from '../Incidencia';

@Component({
    selector: 'app-incidencia-add-actuacion',
    templateUrl: './incidencia-add-actuacion.component.html',
    styleUrls: ['./incidencia-add-actuacion.component.css']
})
export class IncidenciaAddReviewComponent implements OnInit, OnChanges {

   /**
    * 
    * @param incidenciaService 
    * @param toastrService 
    */
    id:number;

    constructor(
        private incidenciaService: IncidenciaService,
        private toastrService: ToastrService,
        private router:Router,
        private activated: ActivatedRoute
    ) {this.activated.params.subscribe(  params =>{    
        this.id=params['id'] ;
        console.log(this.id); });
    
    }

    /**
    * The book's id
    */
    @Input() incidencia: Incidencia;

    /**
    * The review to post
    */
    actuacion: ActuacionR;
    
    public isCollapsed = true;

   
    /**
    * The Event Emitter which sends the signal when a review has just been posted
    * so that the list of reviews refreshes
    */
    @Output() updateReviews = new EventEmitter();

    /**
    * This function posts a review
    * @param reviewForm The form of the review
    */
    postActuacion(reviewForm: NgForm): ActuacionR {
        this.actuacion.incidencia = this.incidencia;
        this.incidenciaService.createActuacion(this.incidencia.id,this.actuacion)
            .subscribe(() => {
                reviewForm.resetForm();
                this.updateReviews.emit();
                this.toastrService.success("The actuacion was successfully created", 'Actuacion added');
            }, err => {
                this.toastrService.error(err, 'Error');
                this.router.navigate(['/listarEmpleados',this.id]);   
            });
        return this.actuacion;
    }
   
   
   
   


    /**
    * The function which initializes the component.
    */
    ngOnInit() {
        this.actuacion = new ActuacionR();
    }

    /**
    * The function which notices that the input which defines the book_id has changed.
    * If the book has changed, we update the reviews to show
    */
    ngOnChanges() {
        this.ngOnInit();
    }



  /**
    * Informs the parent component that the user no longer wants to create an tecnico
    */
   cancelCreation(): void {
    this.router.navigate(['/listarTecnicos',this.id]);
  }
}