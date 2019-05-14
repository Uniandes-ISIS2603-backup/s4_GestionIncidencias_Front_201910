import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { Observable } from 'rxjs';


const API_URL = environment.apiURL;
const empleados = '/empleados';
const tecnicos = '/tecnicos';
const administradores = '/administradores';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {


  constructor(private http: HttpClient) { }

  O 

}
