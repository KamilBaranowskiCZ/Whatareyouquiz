import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cat } from '../models/cat';
import { apiHeaders } from './api-key';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  path = "https://api.api-ninjas.com/v1/cats?min_weight=1"

  
  constructor(private http: HttpClient) { }


  getCat() {
    return this.http.get<Cat[]>(this.path, {headers: apiHeaders});
    /** 
     * You need to generate your own Api Key on api-ninjas page
     */
  }
}
