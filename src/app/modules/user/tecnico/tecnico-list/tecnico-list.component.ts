import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { TecnicoService } from '../tecnico.service';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';
import { Tecnico } from '../tecnico';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-tecnico-list',
  templateUrl: './tecnico-list.component.html',
  styleUrls: ['./tecnico-list.component.css']
})
/**
 * COmponente que se encarga de listar los técnicos
 * @author VALERIE Parra Cortés
 */
export class TecnicoListComponent implements OnInit {
   
/**
 * Constructor del compontente TecnicoListComponet
 * @param tecnicoService el servicio del técnico a mostrar  
 * @param toastrService El servicio para mostrar los mensajes al usuario
 * @param router el router para cambiar de componentes
 * @param activated permite obtener el parametro
 * @param toastr permite mostrar mensajes de error
 * 
 */

   constructor(
    private tecnicoService: TecnicoService, 
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
    * Lista de técnicos
    */

   tecnicos:Tecnico[];

  /**
    * Variable que dice si se crea o no el create
    */
   showCreate: boolean;

   /**
    * Muestra el editar del tecnico
    */
   showEdit: boolean;

   /**
    * Muestra el id del técnico a editar
    */
   tecnico_edit_id: number;

   /**
    * id del técnico que invoco el componente
    */
   id:number;


    /**
     * Dice si se mueestra
     */

    shows: boolean=true;

    /**
     * Obtener la lista del técnicos dle servicio
     */
     getTecnicos(): void {
      this.tecnicoService.getTecnicos()
          .subscribe(tecnicos => {
              this.tecnicos = tecnicos;
          });
    }

    /**
     * Actualiza los técnicos
     */

    updateTecnico(): void {
      this.showEdit = false;
      location.reload();
  }


  /**
   * Vuelve al componente que lo invoco
   */

  goBack():void{
    this.router.navigate(['/menuAdministrador',this.id]);
  }

  /**
   * Navega al componente de lista incidencias
   * @param id del admi que lo invoco
   */

  listarIncidencias(id:number):void{
    this.router.navigate(['/listarIncidenciasTecnico',id,this.id]);
  }
  
  /**
   * Muestra el componente crear
   * @param tecnico_id el id del componente
   */

   showHideEdit(tecnico_id: number): void {
    this.router.navigate(['\editarTecnico',tecnico_id,this.id]);
}

  /**
   * Navega al componente de crear técnico
   */

  crearTecnico():void{
    this.router.navigate(['/crearTecnico',this.id]);
  }

  /**
   * Borra el técnico que el usuario seleccionó
   * @param id del técnico que el usuario selecciono
   */

  deleteTecnico(id:number):void{
    this.tecnicoService.deleteTecnico(id).subscribe(del=>{ this.getTecnicos()
    this.toastr.success('Se elimino al tecnico con éxito','Eliminar técnico')
    });              
  }

   /**      
      * TInicializa el componente
      */
       ngOnInit() {
        this.showCreate = false;
        this.showEdit = false;
        this.getTecnicos();
      }
      ngOnChanges() {
        console.log("Entering in changes");
        location.reload();
        this.ngOnInit();
      }
}
