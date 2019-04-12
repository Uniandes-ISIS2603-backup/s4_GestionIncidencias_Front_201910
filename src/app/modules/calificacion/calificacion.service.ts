import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { calificacion } from './calificacion';
import {Observable} from 'rxjs';
const API_URL = environment.apiURL;
const calificaciones = '/calificaciones';
@Injectable({
  providedIn: 'root'
})


/**
* The service provider for everything related to calificacions
*/

export class calificacionService {
  /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
  constructor(private http: HttpClient) { }


  /**
    * Returns the Observable object containing the list of calificacions retrieved from the API
    * @returns The list of tecnio in real time
    */

  getcalificacions(): Observable<calificacion[]> {
    return this.http.get<calificacion[]>(API_URL + '/calificaciones');
    }

    /**
    * Creates a new calificacion
    * @param calificacion The new tenico
    * @returns The calificacions with its new id if it was created, false if it wasn't
    */

    createcalificacion(calificacion): Observable<calificacion> {
      return this.http.post<calificacion>(API_URL + calificaciones, calificacion);
    }

    /**
        * Updates a calificacion
        * @param calificacion The updated calificacion
        * @returns The updated calificacion
        */
    updatecalificacion(calificacion): Observable<calificacion> {
        return this.http.put<calificacion>(API_URL + calificaciones + '/' + calificacion.id, calificacion);
    }
    
   /**
    * Returns the Observable object containing the list of editorials retrieved from the API
    * @returns The list of books in real time
    */
   
    getcalificacion(calificacionId): Observable<calificacion> {
      console.log("Paso por el modulo correcto");
      return this.http.get<calificacion>(API_URL + calificaciones + '/' + calificacionId);
  }

}