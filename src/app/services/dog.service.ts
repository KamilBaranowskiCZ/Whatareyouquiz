import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dog } from '../models/dog';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  path = "https://random.dog/woof.json"
  constructor(private http: HttpClient) { }


  getDog() {
    return this.http.get<Dog>(this.path);
  }
}
