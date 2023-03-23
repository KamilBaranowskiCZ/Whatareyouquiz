import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cat } from '../models/cat';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  path = "https://api.api-ninjas.com/v1/cats?min_weight=1"
  headers = new HttpHeaders({
      'X-Api-Key': 'wWoOVKzl4TL5RrZc8J+vsA==kPBxvkLkZKDcPBtJ'
    })
  
  constructor(private http: HttpClient) { }


  getCat() {
    return this.http.get<Cat[]>(this.path, {headers: this.headers});
  }
}
