import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserservicesService {
  urlBase =environment.apiURL + "users/"
  constructor(private http:HttpClient) { }
  getAll(): Observable<string>{
    const url = this.urlBase
    return this.http.get<string>(url) 
  }
}
