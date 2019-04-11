import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Incidencia } from './Incidencia';
import { IncidenciaDetail } from './Incidencia-detail';

import { environment } from '../../../environments/environment';
const API_URL = environment.apiURL;
const incidencias = '/Incidencias';


/**
* El servicio relacionado con  las Incidencias
*/
@Injectable()
export class IncidenciaService {

    /**
    * Constructor del  servicio 
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }

    /**
    * retorna todas las incidencias de que estan en la base de datos
    * @returns lista de incidencias
    */
    getIncidencias(): Observable<Incidencia[]> {
        return this.http.get<Incidencia[]>(API_URL + incidencias);
    }

    /**
    * Obtiene la iformacion del API
    * @returns la incidencia
    */
    getIncidenciaDetail(Id : any ): Observable<IncidenciaDetail> {
        return this.http.get<IncidenciaDetail>(API_URL + incidencias + '/' + Id);
    }
    
    /**
    * Crea una incidencia
    * @param Incidencia la incidencia que sera creada
    * @returns confirma si se crea la incidencia
    */
    createIncidencia(Incidencia): Observable<Incidencia> {
        return this.http.post<Incidencia>(API_URL + incidencias, Incidencia);
    }
    
    /**
    * Actualiza una incidencia
    * @param incidencia, incidencia que se va a actualizar
    * @returns confirma si se crea la incidencia
    */
    updateEditorial(incidencia): Observable<IncidenciaDetail> {
        return this.http.put<IncidenciaDetail>(API_URL + incidencias + '/' + incidencia.id, incidencia);
    }
    
    /**
    * Borra una incidencia
    * @param id, identificador de la incidencia a borrar
    * @returns true si la borra,  false en caso contrario
    */
    deleteEditorial(Id): Observable<IncidenciaDetail> {
        return this.http.delete<IncidenciaDetail>(API_URL + incidencias + '/' + Id);
    }
}