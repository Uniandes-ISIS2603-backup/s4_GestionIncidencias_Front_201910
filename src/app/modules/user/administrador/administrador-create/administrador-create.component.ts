import { Component, OnInit, EventEmitter, Output } from '@angular/core';
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

  constructor(
    private editorialService: AdministradorService,
    private toastrService: ToastrService
    ) {}

  /**
   * The new administrador
   */
    administrador:Administrador;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an administrador
    */
   @Output() cancel = new EventEmitter();

   /**
   * The output which tells the parent component
   * that the user created a new editorial
   */
   @Output() create = new EventEmitter();


   /**
    * Crea un nuevo administrador
    */
   createAdministrador(): Administrador {
    this.editorialService.createAdministrador(this.administrador)
        .subscribe((administrador) => {
            this.administrador = administrador;
            this.create.emit();            
            location.reload();
        });
    return this.administrador;    
  }

  /**
    * Informa cuando no se quiere crear un administrador
    */
   cancelCreation(): void {
    this.cancel.emit();
  }
  
   /**
    * Inicializa el componente
    */
  ngOnInit() {
    this.administrador= new Administrador();
  }

}
