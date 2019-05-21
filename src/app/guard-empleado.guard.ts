import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Globals } from './globals';

@Injectable({
  providedIn: 'root'
})
export class GuardEmpleadoGuard implements CanActivate {

  constructor(private globals:Globals){ 
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.globals.logInEmpleado;
  }
}
