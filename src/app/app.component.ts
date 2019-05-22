import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Globals } from './globals';
import { Router } from '@angular/router';
import { TouchSequence } from 'selenium-webdriver';

/**
 * The app component. This component is the base of s4_incidencias-Front
 */
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

    /**
     * Variable que dice si un administrador esta logeado
     */
    logoutvar:boolean;

    /**
     * Variable que dice si el empleado esta logeado
     */

    logOutVarEmpleado:boolean;
    /**
     * Variable que dice si un técnico esta logeado o no
     */

    /**
     * The title that appears on the NavBar and the web browser
     */
    title: String;

    /**
     * Assigns a title to the web page
     */
    ngOnInit(): void {
        this.title = "Gestión de Incidencias";
        this.authService.start();
    }

    /**
     * @ignore
     */
    constructor(private authService: AuthService,private global:Globals,private router:Router) { 
        this.logoutvar=this.global.logInAdmi;
        this.logOutVarEmpleado=this.global.logInEmpleado;
    }

    logout(): void {
        this.global.setLogInAdmi(false);
        this.router.navigate(['/home']);
    }

    logoutEmpleado():void{
        this.global.setLogInEmpleado(false);
        console.log('empleado salio '+ this.global.logInEmpleado);
        this.router.navigate(['/home']);
    }
    OnChanges(){
        this.logoutvar=this.global.logInAdmi;
        this.logOutVarEmpleado=this.global.logInEmpleado;
        console.log(this.global.logInAdmi);
    }



}





