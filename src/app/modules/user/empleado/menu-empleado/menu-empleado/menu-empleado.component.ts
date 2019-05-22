import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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
  constructor(private router:Router,private activated:ActivatedRoute) {    
    this.activated.params.subscribe(  params =>{    
      this.id=params['id'] ;      
      console.log(this.id);      
    });
   }

  ngOnInit() {
  }


  verPerfil():void{
    this.router.navigate(['/empleadoDetalle',this.id]);

  }

  listarMisIncidencias():void{
    
  }

}
