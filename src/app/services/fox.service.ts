import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fox } from '../models/fox';

@Injectable({
  providedIn: 'root',
})
export class FoxService {
  path = 'https://randomfox.ca/floof/';

  constructor(private http: HttpClient) {}

  getFox() {
    return this.http.get<Fox>(this.path);
  }
}
