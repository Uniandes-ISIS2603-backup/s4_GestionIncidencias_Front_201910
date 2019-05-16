import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tipoUsuario:string;
  path:string;
  constructor( private router: Router) { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    console.log(this.tipoUsuario);

  }  

  adminLogin():void{
    this.tipoUsuario="\administradores";    
    this.router.navigate(['/login',this.tipoUsuario]);
  }
  
  tecnicoLogin():void{    
    this.router.navigate(['/login','tecnicos']);
  }
  
  empleadoLogin():void{
    this.tipoUsuario="\empleados";
    this.router.navigate(['/login',this.tipoUsuario]);
  }

 

}
