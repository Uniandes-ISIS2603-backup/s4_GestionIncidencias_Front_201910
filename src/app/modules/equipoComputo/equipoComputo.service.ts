import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { equipoComputo } from './equipoComputo';
import {Observable} from 'rxjs';
const API_URL = environment.apiURL;
const equipoComputos = '/equipos';
@Injectable({
  providedIn: 'root'
})


/**
* The service provider for everything related to equipoComputos
*/

export class equipoComputoService {
  /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
  constructor(private http: HttpClient) { }


  /**
    * Returns the Observable object containing the list of equipoComputos retrieved from the API
    * @returns The list of tecnio in real time
    */

  getequipoComputos(): Observable<equipoComputo[]> {
    return this.http.get<equipoComputo[]>(API_URL + '/equipos');
    }

    /**
    * Creates a new equipoComputo
    * @param equipoComputo The new tenico
    * @returns The equipoComputos with its new id if it was created, false if it wasn't
    */

    createequipoComputo(equipoComputo): Observable<equipoComputo> {
      return this.http.post<equipoComputo>(API_URL + equipoComputos, equipoComputo);
    }

    /**
        * Updates a equipoComputo
        * @param equipoComputo The updated equipoComputo
        * @returns The updated equipoComputo
        */
    updateequipoComputo(equipoComputo): Observable<equipoComputo> {
        return this.http.put<equipoComputo>(API_URL + equipoComputos + '/' + equipoComputo.id, equipoComputo);
    }
    
   /**
    * Returns the Observable object containing the list of editorials retrieved from the API
    * @returns The list of books in real time
    */
   
    getequipoComputo(equipoComputoId): Observable<equipoComputo> {
      console.log("Paso por el modulo correcto");
      return this.http.get<equipoComputo>(API_URL + equipoComputos + '/' + equipoComputoId);
  }

}