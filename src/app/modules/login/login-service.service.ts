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
export class LoginServiceService {

  isLoginn:boolean;



  setIsLogin(value:boolean){
      this.isLoginn=true;
  }

  isLogin():boolean{
    return this.isLoginn;
  }

  constructor(private http:HttpClient) {  
    this.isLoginn=false;

  }

  getLogin(user:String, password: string, tipo:string): Observable<User> {
    return this.http.get<User>(API_URL + '/' + tipo +'/'+ user);    
  }

  isValidLogin(user:String, password: string, tipo:string): Observable<User> {
    return this.http.get<User>(API_URL + '/' + tipo +'/'+ user);    
  }

}
