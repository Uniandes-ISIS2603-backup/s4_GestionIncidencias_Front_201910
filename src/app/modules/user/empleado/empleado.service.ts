import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment';

import { Empleado } from './empleado';
import { Observable } from 'rxjs';

const API_URL = environment.apiURL;
const empleados = '/empleados';

/**
* The service provider for everything related to empleados
*/

@Injectable({
  providedIn: 'root'
})

export class EmpleadoService {
  /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
   constructor(private http: HttpClient) { }

    /**
    * Returns the Observable object containing the list of tecnicos retrieved from the API
    * @returns The list of empleados in real time
    */
    getEmpleados(): Observable<Empleado[]> {
     return this.http.get<Empleado[]>(API_URL + empleados);
     }

    /**
    * Creates a new empleado
    * @param empleado The new empleado
    * @returns The empleado with its new id if it was created, false if it wasn't
    */
    createEmpleado(empleado): Observable<Empleado> {
      return this.http.post<Empleado>(API_URL + empleados, empleado);
    }

     /**
       * Updates a Empleado
       * @param Empleado The updated empleado
       * @returns The updated empleado
       */
      updateEmpleados(empleado): Observable<Empleado> {
       return this.http.put<Empleado>(API_URL + empleados + '/' + empleado.id, empleado);
   }

   getEmpleado(empleadoId): Observable<Empleado> {
    console.log("Paso por el modulo correcto");
    return this.http.get<Empleado>(API_URL + empleados + '/' + empleadoId);
}


}
