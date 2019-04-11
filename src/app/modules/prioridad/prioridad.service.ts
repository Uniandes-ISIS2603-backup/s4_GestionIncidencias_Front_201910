import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Prioridad} from './prioridad';
import {PrioridadDetail} from './prioridad-detail'
import {environment} from '../../../environments/environment';


const API_URL = environment.apiURL;
const prioridades = '/Prioridad';

/**
 * Servicio creado para manipular prioridad
 */
@Injectable({providedIn: 'root'})

export class PrioridadService {
/**
 * Constructor del servicio de prioridad
 * @param http, necesario para los requests a el API
 */
constructor(private http: HttpClient){}

getPrioridades(): Observable<Prioridad[]>{
    return this.http.get<Prioridad[]>(API_URL + prioridades);
}

    /**
    * Returns the Observable object containing the Incidence retrieved from the API
    * @returns The prioridad
    */
   getPrioridadDetail(id: any ): Observable<PrioridadDetail> {
    return this.http.get<Prioridad>(API_URL + prioridades + '/' + id);
}

    /**
    * Creates a new prioridad
    * @paramprioridad The new prioridad
    * @returns The prioridad with its new id if it was created, false if it wasn't
    */
   createPrioridad(prioridad): Observable<PrioridadDetail> {
    return this.http.post<PrioridadDetail>(API_URL + prioridades, prioridad);
}
  /**
        * Updates a new Incidence
        * @param book The updated Incidence
        * @returns The updated Incidence
        */
       updatePrioridad(prioridad): Observable<PrioridadDetail> {
        return this.http.put<PrioridadDetail>(API_URL + prioridades + '/' + prioridad.tipo, prioridad);
    }

 /**
    * Borra una Prioridad
    * @param prioridadId el id de la prioridad a borrar
    * @returns True if the book was deleted, false otherwise
    */
   deletePrioridad(prioridadId): Observable<PrioridadDetail> {
    return this.http.delete<PrioridadDetail>(API_URL + prioridades + '/' + prioridadId);
}


}