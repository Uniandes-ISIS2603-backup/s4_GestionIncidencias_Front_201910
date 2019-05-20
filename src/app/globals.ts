import { Injectable } from '@angular/core';


@Injectable()
export class Globals {  
    logInAdmi:boolean=false;

    setLogInAdmi(logIn:boolean):void{
        this.logInAdmi=logIn;
    }

 

}