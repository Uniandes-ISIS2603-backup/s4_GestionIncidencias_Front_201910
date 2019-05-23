import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {Incidencia} from '../Incidencia';
import {IncidenciaService} from '../Incidencia.service';

/**
*Esta es la clase que se encarga de controlar las incidencias
*/

/**
* The component for the list of editorials in the BookStore
*/


import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';





@Component({
  selector: 'app-incidencia-list',
  templateUrl: './incidencia-list.component.html',
  styleUrls: ['./incidencia-list.component.css']
})
export class IncidenciaListComponent implements OnInit {
   /**
    * Constructor for the component
    * @param tecnicoService The author's services provider
    */
   constructor(
    private incidenciaService: IncidenciaService,
    private modalDialogService: ModalDialogService,
    private viewRef: ViewContainerRef,
    private toastrService: ToastrService,
    private router: Router,
    private activated: ActivatedRoute,
    private toastr:ToastrService) {
      this.activated.params.subscribe(  params =>{    
        this.id=params['id'] ;
        console.log(this.id);      
      });
    }

  /**
    * List of incidencias
    */

   incidencias:Incidencia[];

  /**
    * Shows or hides the create component
    */
   showCreate: boolean;

   /**
    * Shows or hides the edit component.
    */
   showEdit: boolean;

   /**
    * The id of the tecnico being edited.
    */
   tecnico_edit_id: number;

   id:number;


    /**
     * Shoy the list of tecnicos
     */

    shows: boolean=true;

    /**
    * Asks the service to update the list of tecnicos
    */
     getIncidencias(): void {
      this.incidenciaService.getIncidencias()
          .subscribe(incidencias => {
              this.incidencias = incidencias;
          });
    }

    updateTecnico(): void {
      this.showEdit = false;
      location.reload();
  }

  goBack():void{
    this.router.navigate(['/menuAdministrador',this.id]);
  }



  //////////////////////////////////////////Falta terminar
  listarIncidencias(id:number):void{
    this.router.navigate(['/listarIncidenciasTecnico',id,this.id]);
  }


      /**
    * Shows or hides the create component
    */
   showHideEdit(tecnico_id: number): void {
    this.router.navigate(['\editarTecnico',tecnico_id,this.id]);
}


//....................Mirar el  path............................
  crearIncidencia():void{
    this.router.navigate(['/crearIncidencia',this.id]);
  }

  deleteTecnico(id:number):void{
    this.incidenciaService.deleteIncidencia(id).subscribe(del=>{ this.getIncidencias()
    this.toastr.success('Se eliminó la incidencia con éxito','Eliminar incidencia')
    });              
  }

   /**
      * This will initialize the component by retrieving the list of incidencias from the service
      * This method will be called when the component is created
      */
       ngOnInit() {
        this.showCreate = false;
        this.showEdit = false;
        this.getIncidencias();
      }
      ngOnChanges() {
        console.log("Entering in changes");
        location.reload();
        this.ngOnInit();
      }


}
