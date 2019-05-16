import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { LoginServiceService } from './modules/login/login-service.service';


@Injectable({
  providedIn: 'root'
})
export class ModulesGuard implements CanActivate {


  constructor(private auth: LoginServiceService){
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}
