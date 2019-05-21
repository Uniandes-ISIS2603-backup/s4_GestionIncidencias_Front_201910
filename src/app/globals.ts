import { Injectable } from '@angular/core';


@Injectable()
export class Globals {  
    logInAdmi:boolean=false;
    logInEmpleado:boolean=false;

    setLogInAdmi(logIn:boolean):void{
        this.logInAdmi=logIn;
    }

    setLogInEmpleado(logIn:boolean):void{
        this.logInEmpleado=logIn;
    }
 

}