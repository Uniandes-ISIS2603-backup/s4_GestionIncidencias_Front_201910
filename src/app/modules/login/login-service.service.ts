import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import { User } from '../user/user';
import { environment } from '../../../environments/environment';
const API_URL = environment.apiURL;


@Injectable({
  providedIn: 'root'
})

/** 
 * Class LoginServiceService
 */
export class LoginServiceService {

  /**
   * atributo boolean para la verificacion del login
   */
  isLoginn:boolean;



  /**
   * Metodo que verifica que se encuentra logueado
   * @param value 
   */
  setIsLogin(value:boolean){
      this.isLoginn=true;
  }


  /**
   * metodo que retorna el valor del atributo isLoginn.
   */
  isLogin():boolean{
    return this.isLoginn;
  }

  /**
   *  construtor del login.
   *  se inicializa en false para pedir los datos de inicio de sesion del usuario. 
   * @param http conexion HttpClient
   */
  constructor(private http:HttpClient) {  
    this.isLoginn=false;

  }

  /**
   * metodo que obtiene el loguin del ususario ingresado
   * @param user nombre del usuario ingresado 
   * @param password contraseña del usuario 
   * @param tipo  tipo de usuario que va a ingresar
   */
  getLogin(user:String, password: string, tipo:string): Observable<User> {
    return this.http.get<User>(API_URL + '/' + tipo +'/'+  'users' +user);    
  }


  /**
   * validacion de el login del usuario.
   * @param user usuario que va  ahacer login
   * @param password constraseña de el usuario que va a hacer login
   * @param tipo tipo de usuarop que va a hacer login 
   */
  isValidLogin(user:String, password: string, tipo:string): Observable<User> {
    return this.http.get<User>(API_URL + '/' + tipo +'/'+ user);    
  }

}
