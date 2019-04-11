import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Tecnico } from './tecnico';
import {Observable} from 'rxjs';
const API_URL = environment.apiURL;
const tecnicos = '/tecnicos';
@Injectable({
  providedIn: 'root'
})


/**
* The service provider for everything related to tecnicos
*/

export class TecnicoService {
  /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
  constructor(private http: HttpClient) { }


  /**
    * Returns the Observable object containing the list of tecnicos retrieved from the API
    * @returns The list of tecnio in real time
    */

  getTecnicos(): Observable<Tecnico[]> {
    return this.http.get<Tecnico[]>(API_URL + '/tecnicos');
    }

    /**
    * Creates a new tecnico
    * @param tecnico The new tenico
    * @returns The tecnicos with its new id if it was created, false if it wasn't
    */

    createTecnico(tecnico): Observable<Tecnico> {
      return this.http.post<Tecnico>(API_URL + tecnicos, tecnico);
    }

    /**
        * Updates a tecnico
        * @param Tecnico The updated tecnico
        * @returns The updated tecnico
        */
    updateTecnico(tecnico): Observable<Tecnico> {
        return this.http.put<Tecnico>(API_URL + tecnicos + '/' + tecnico.id, tecnico);
    }
    
   /**
    * Returns the Observable object containing the list of editorials retrieved from the API
    * @returns The list of books in real time
    */
   
    getTecnico(tecnicoId): Observable<Tecnico> {
      console.log("Paso por el modulo correcto");
      return this.http.get<Tecnico>(API_URL + tecnicos + '/' + tecnicoId);
  }

}
