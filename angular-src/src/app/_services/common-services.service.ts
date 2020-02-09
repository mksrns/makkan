import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonServicesService {
  
  constructor(private _http:HttpClient) { }

  getAll(url):Observable<any[]>{
    return this._http.get<any[]>(environment.baseUrl + url);
  }

  post(url, data:any):Observable<any>{
    let httpheaders = new HttpHeaders()
    .set('content-type','application/json');
    let options = {
      headers:httpheaders
    };
    return this._http.post<any>(environment.baseUrl + url, data, options);
  }
}
