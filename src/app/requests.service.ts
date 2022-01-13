import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private http: HttpClient) { }
  
  configUrl = 'assets/config.json';

  get(url:string){
    return this.http.get(url); //hace peticion GET
  }
  
}
