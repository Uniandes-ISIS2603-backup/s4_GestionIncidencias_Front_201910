import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Globals } from '../../../../../globals';

@Component({
  selector: 'app-menu-empleado',
  templateUrl: './menu-empleado.component.html',
  styleUrls: ['./menu-empleado.component.css']
})
export class MenuEmpleadoComponent implements OnInit {
  /**
   * Id del empleado que esta logeado
   */
  id:number;
  
  /**
   * constructor del menu de empleado
   * @param router reuter del menu empleado
   * @param activated activated del menu empleado
   * @param globals globals del menu empleado
   */
  constructor(private router:Router,private activated:ActivatedRoute,
    private globals:Globals) {    
    this.activated.params.subscribe(  params =>{    
      this.id=params['id'] ;      
      console.log(this.id);      
    });
   }

   /**
    * ngOnInit de lo que podamos necesitar mas adelante
    */
  ngOnInit() {
  }


  verPerfil():void{
    this.router.navigate(['/empleadoDetalle',this.id]);

  }

  listarMisIncidencias():void{
    this.router.navigate(['\listarIncidenciasMenuEmpleado',this.id]);    
  }

}
