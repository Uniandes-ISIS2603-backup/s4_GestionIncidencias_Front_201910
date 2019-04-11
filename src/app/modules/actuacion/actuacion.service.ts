    
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Actuacion} from './actuacion';
import {ActuacionDetail} from './actuacion-detail'
import {environment} from '../../../environments/environment';


const API_URL = environment.apiURL;
const actuaciones = '/Actuaciones';

/**
 * Servicio creado para manipular actuaciones
 */
@Injectable({providedIn: 'root'})

export class ActuacionService {
/**
 * Constructor del servicio de actuacion
 * @param http, necesario para los requests a el API
 */
constructor(private http: HttpClient){}

getActuaciones(): Observable<Actuacion[]>{
    return this.http.get<Actuacion[]>(API_URL + actuaciones);
}

    /**
    * Returns the Observable object containing the editorial retrieved from the API
    * @returns The editorial
    */
   getActuacionDetail(id: any ): Observable<ActuacionDetail> {
    return this.http.get<Actuacion>(API_URL + actuaciones + '/' + id);
}

    /**
    * Creates a new actuacion
    * @paramactuacion The new actuacion
    * @returns The actuacion with its new id if it was created, false if it wasn't
    */
   createActuacion(actuacion): Observable<ActuacionDetail> {
    return this.http.post<ActuacionDetail>(API_URL + actuaciones, actuacion);
}
  /**
        * Updates a new book
        * @param book The updated book
        * @returns The updated book
        */
       updateActuacion(actuacion): Observable<ActuacionDetail> {
        return this.http.put<ActuacionDetail>(API_URL + actuaciones + '/' + actuacion.fecha, actuacion);
    }

 /**
    * Borra una actuacion
    * @param actuacionId el id de la actuacion a borrar
    * @returns True if the book was deleted, false otherwise
    */
   deleteActuacion(actuacionId): Observable<ActuacionDetail> {
    return this.http.delete<ActuacionDetail>(API_URL + actuaciones + '/' + actuacionId);
}


}