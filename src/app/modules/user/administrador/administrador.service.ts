import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { Administrador } from './administrador';

const API_URL = environment.apiURL;
const administradores = '/admins';

/**
 * Servicio provedor para todo lo relacionado con administradores
 */
@Injectable({
  providedIn: 'root'
})
export class AdministradorService {
  /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
   constructor(private http: HttpClient) { }

    /**
    * Returns the Observable object containing the list of tecnicos retrieved from the API
    * @returns The list of administradores in real time
    */
    getAdministradores(): Observable<Administrador[]> {
     return this.http.get<Administrador[]>(API_URL + administradores);
     }

    /**
    * Creates a new administrador
    * @param administrador The new administrador
    * @returns The administrador with its new id if it was created, false if it wasn't
    */
    createAdministrador( administrador ): Observable<Administrador> {
      return this.http.post<Administrador>(API_URL + administradores, administrador);
    }

     /**
       * Updates a Administrador
       * @param Administrador The updated administrador
       * @returns The updated administrador
       */
      updateAdministradors(administrador): Observable<Administrador> {
       return this.http.put<Administrador>(API_URL + administradores + '/' + administrador.id, administrador);
   }

   getAdministrador(administradorId): Observable<Administrador> {
    console.log("Paso por el modulo correcto");
    return this.http.get<Administrador>(API_URL + administradores + '/' + administradorId);
}

}
