import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Globals } from './globals';

@Injectable({
  providedIn: 'root'
})
export class GuardTecnicoGuard implements CanActivate {

  constructor(private global:Globals) {
    
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.global.logInTecnico;
  }
}
