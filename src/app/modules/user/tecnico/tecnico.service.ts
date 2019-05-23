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
* Servicio que provee todo lo relacionado con los técnicos
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
     * Retorna el técnico con el usuario dado por parámetro
     * @param user el usuario
     */

    getTecnicoByUser(user:string):Observable<Tecnico>{
        return this.http.get<Tecnico>(API_URL+tecnicos+'/users/'+user);
    }
  


   /**
    * Returns the Observable object containing the list of editorials retrieved from the API
    * @returns The list of books in real time
    */
   
    getTecnico(tecnicoId): Observable<Tecnico> {     
      return this.http.get<Tecnico>(API_URL + tecnicos + '/' + tecnicoId);
  }

  deleteTecnico(id:number):Observable<Tecnico>{       
    return this.http.delete<Tecnico>(API_URL + tecnicos + '/' + id);
 }

}
