import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import * as jwt_decode from 'jwt-decode';
import { superAdmin } from '../../_models/superAdmin';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SuperAdminService {
  token:String; 
  redirectUrl:String;
  constructor(private router:Router, private _http:HttpClient) { }

  login(superAdmin:any):Observable<any>{
    let httpheaders = new HttpHeaders()
    .set('content-type','application/json');
    let options = {
      headers:httpheaders
    };
    return this._http.post<any>(environment.baseUrl + 'superAdmin/login', superAdmin, options);
  }

  getAuthorizationToken(){
    const token = JSON.parse(localStorage.getItem('token'));
    return token;
  }

  isLoggedIn(){
    if(localStorage.getItem('token')) {
      if(jwt_decode(localStorage.getItem('token')).email === localStorage.getItem('currentUser')
        // && jwt_decode(localStorage.getItem('token')).aud === "bricks-17395"
        && jwt_decode(localStorage.getItem('token')).exp * 1000 > Date.now()
        ) {
          return true;
      } 
    } 
    return false;
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/super-admin']);
  }

}
