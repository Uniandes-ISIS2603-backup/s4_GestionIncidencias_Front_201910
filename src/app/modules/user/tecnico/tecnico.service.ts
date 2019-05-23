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
    * @param http The HttpClient para comunicarse con el back
    */
  constructor(private http: HttpClient) { }


  /**
    * Retorna una lista de Observables de Tecnicos que se van a listar
    * @returns Listar real de técnicos en la base de datos
    */

  getTecnicos(): Observable<Tecnico[]> {
    return this.http.get<Tecnico[]>(API_URL + '/tecnicos');
    }

    /**
    * Crea un nuevo técnico
    * @param tecnico El nuevo técnico a crear
    * @returns El técnico con su nuevo id si fue creado.
    */

    createTecnico(tecnico): Observable<Tecnico> {
      return this.http.post<Tecnico>(API_URL + tecnicos, tecnico);
    }

    /**
        * Actualiza un técnico
        * @param Tecnico El técnico a actualizar 
        * @returns El técnico actualizado
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
    * Método que permite obtener un técnico de la base de datos de un id dado por parametro
    * @param tecnicoId id del técnico
    * @returns el técnico consultado si existe, 404 not found si no existe
    */
   
    getTecnico(tecnicoId:number): Observable<Tecnico> {     
      return this.http.get<Tecnico>(API_URL + tecnicos + '/' + tecnicoId);
  }

  /**
   * Borra un técnico de la base de datos de un id dado por parámetro
   * @param id  del técnico a eliminar
   */
  deleteTecnico(id:number):Observable<Tecnico>{       
    return this.http.delete<Tecnico>(API_URL + tecnicos + '/' + id);
 }

}
