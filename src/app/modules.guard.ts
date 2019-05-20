import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginServiceService } from './modules/login/login-service.service';
import { Globals } from './globals';



@Injectable({
  providedIn: 'root'
})
export class ModulesGuard implements CanActivate   {

  login:boolean=false;

  constructor(private guards: Globals){
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log("Guard variable "+this.guards.logInAdmi)
    return true;
  }
  
}
