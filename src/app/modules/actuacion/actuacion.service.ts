    
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Actuacion} from './actuacion';
import {environment} from '../../../environments/environment';

const API_URL = environment.apiURL;
const actuaciones = '/Actuaciones';

/**
 * Servicio creado para manipular actuaciones
 */
@Injectable()
export class ActuacionService {
/**
 * Constructor del servicio de actuacion
 * @param http, necesario para los requests a el API
 */
constructor(private http: HttpClient){}

getActuaciones(): Observable<Actuacion[]>{
    return this.http.get<Actuacion[]>(API_URL + actuaciones);
}






}