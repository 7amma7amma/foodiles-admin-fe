import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AmbianceService {
  endpoint = environment.apiUrl + 'cadreAmbiance/';
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.endpoint);
  }
}
