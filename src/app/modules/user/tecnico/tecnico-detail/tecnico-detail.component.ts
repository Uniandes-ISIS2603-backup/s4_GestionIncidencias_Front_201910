import { Component, OnInit } from '@angular/core';
import { Tecnico } from '../tecnico';
import { Router, ActivatedRoute } from '@angular/router';
import { TecnicoService } from '../tecnico.service';

@Component({
  selector: 'app-tecnico-detail',
  templateUrl: './tecnico-detail.component.html',
  styleUrls: ['./tecnico-detail.component.css']
})
export class TecnicoDetailComponent implements OnInit {

/**
  * El id del tecnico, viene como parametro
  */
 id:number;
 /**
  * El tecnico al que se muestra el detail
  */
 tecnico: Tecnico;

  constructor(private router:Router,private activated:ActivatedRoute,private tecnicoService:TecnicoService) { 
    this.activated.params.subscribe(  params =>{    
      this.id=params['id'] ;        
      console.log(this.id);
      this.getTecnico();
    });
  }

  /**
     *  Recupera la información del empleado
    */
   getTecnico(): void {
    this.tecnicoService.getTecnico(this.id)
        .subscribe(empleado => {
            this.tecnico = empleado;
        });
  }


  editTecnico(): void {
        this.tecnicoService.updateTecnico(this.tecnico)
       .subscribe((tecnico) => {             
         this.tecnico=tecnico;   
         console.log('Se actualizo la contraseña');
       });        
}


  ngOnInit() {
  }

  
  goBack():void{
    this.router.navigate(['/menuTecnico',this.tecnico.id]);                     
}

}
