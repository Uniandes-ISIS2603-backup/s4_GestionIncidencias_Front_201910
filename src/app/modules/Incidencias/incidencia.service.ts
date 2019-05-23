import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Incidencia } from './Incidencia';
import { IncidenciaDetail } from './Incidencia-detail';
import {ActuacionR} from './ActuacionR'
import { environment } from '../../../environments/environment';



const API_URL = environment.apiURL;
const incidencias:string = '/Incidencias';
const actuaciones:string = '/actuaciones';

/**
* El servicio relacionado con  las Incidencias
*/
@Injectable()
export class IncidenciaService {

  /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
   constructor(private http: HttpClient) {}

  /**
    * Returns the Observable object containing the list of books retrieved from the API
    * @returns The list of books in real time
    */
   getIncidencias(): Observable<Incidencia[]> {
    return this.http.get<Incidencia[]>(API_URL + incidencias);
}

/**
* Creates a new book
* @param incidencia The new book
* @returns The book with its new id if it was created, false if it wasn't
*/

createIncidencia(incidencia): Observable<IncidenciaDetail> {
    return this.http.post<IncidenciaDetail>(API_URL + incidencias, incidencia);
}
getIncIdenciaDetail(IncidenciasId): Observable<IncidenciaDetail> {
  return this.http.get<IncidenciaDetail>(API_URL + incidencias + '/' + IncidenciasId);
}

createActuacion(bookId, actuacion : ActuacionR): Observable<ActuacionR> {
  return this.http.post<ActuacionR>(API_URL + incidencias + '/' + bookId + actuaciones, actuacion);
}

updateIncidencia(incidencia : Incidencia): Observable<IncidenciaDetail> {
  return this.http.put<IncidenciaDetail>(API_URL + incidencias + '/' + incidencia.id, incidencia);
}

deleteIncidencia(IncidenciasId): Observable<IncidenciaDetail> {
  return this.http.delete<IncidenciaDetail>(API_URL + incidencias + '/' + IncidenciasId);
}

}