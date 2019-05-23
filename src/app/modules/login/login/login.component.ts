import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';
import { ActivatedRoute } from '@angular/router'
import { User } from '../../user/user';
import { LoginServiceService } from '../login-service.service';
import { isNullOrUndefined } from 'util';
import { ModulesGuard } from '../../../modules.guard';
import { Globals } from '../../../globals';
import { TecnicoService } from '../../user/tecnico/tecnico.service';
import { Tecnico } from '../../user/tecnico/tecnico';
import { EmpleadoService } from '../../user/empleado/empleado.service';
import { Empleado } from '../../user/empleado/empleado';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  tipoUsuario:string;  
  user:User
  tecnico: Tecnico;
  empleado: Empleado;
  
  /**
   * Crea la conexion para iniciar la sesion del usuario
   */
  constructor(private router:Router, 
    private guard: ModulesGuard,
     private activated: ActivatedRoute, 
     private tecnicoService: TecnicoService, 
    private global: Globals,
    private empleadoService: EmpleadoService,
    private toastr:ToastrService)
   { 
    this.activated.params.subscribe(  params =>{    
      this.tipoUsuario=params['tipo'] ;
      console.log(this.tipoUsuario);      
    });  
    this.user= new User();
  }



  
  ngOnInit() {
  }

  /**
   * OnLogin para los tipos de usuarios
   */
  onLogin(): void {    
     if(this.tipoUsuario=="administradores"){
        this.tecnicoService.getTecnicoByUser(this.user.usuario).subscribe(tecnicos => {
          this.tecnico = tecnicos;
          if(!isNullOrUndefined(this.tecnico)){
                if(this.tecnico.password==this.user.password){
                  this.global.setLogInAdmi(true);
                  this.router.navigate(['/menuAdministrador',this.tecnico.id]);                  
                }
                else{                  
                  this.toastr.error('La contraseña ingresada no es válida','Contraseña invalida');
                }
          }
      });
        
     } 
     else if(this.tipoUsuario=="tecnicos"){
      
      this.tecnicoService.getTecnicoByUser(this.user.usuario).subscribe(tecnicos => {
        this.tecnico = tecnicos;
        if(!isNullOrUndefined(this.tecnico)){
              if(this.tecnico.password==this.user.password){
                this.global.setLogInTecnico(true);
                console.log(this.global.logInTecnico);
                this.router.navigate(['/menuTecnico',this.tecnico.id]);                
              }
              else{                  
                this.toastr.error('La contraseña ingresada no es válida','Contraseña invalida');
              }
        }
    }); 

     }
     else{
      this.empleadoService.getEmpleadoByUser(this.user.usuario).subscribe(empleado => {
        this.empleado = empleado;
        if(!isNullOrUndefined(this.empleado)){
             if(this.empleado.password==this.user.password){
              this.global.setLogInEmpleado(true);              
               this.router.navigate(['/menuEmpleado',this.empleado.id]);               
             }
             else{                  
              this.toastr.error('La contraseña ingresada no es válida','Contraseña invalida');
            }
        }
     });
 
     }
  }


  /**
   * Vonver a la ventana anterior.
   */
  goBack():void{
    this.router.navigate(['/home']);
  }
}
