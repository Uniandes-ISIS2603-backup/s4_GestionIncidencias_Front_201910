import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';
import { ActivatedRoute } from '@angular/router'
import { User } from '../../user/user';
import { LoginServiceService } from '../login-service.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  tipoUsuario:string;
  user:User
  
  constructor(private router:Router, private activated: ActivatedRoute, private log:LoginServiceService) { 
    this.activated.params.subscribe(  params =>{    
      this.tipoUsuario=params['tipo'] ;
      console.log(this.tipoUsuario);
    });

  
  }

  
  ngOnInit() {
  }

  onLogin(): void {

      this.log.setIsLogin(true);
      console.log("Intento activar el guard");
  }


  goBack():void{
    this.router.navigate(['/home']);
  }
}
