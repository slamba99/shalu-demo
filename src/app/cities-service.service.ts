import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { City } from './city';

@Injectable({
  providedIn: 'root'
})
export class CitiesServiceService {
  private url = "https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/cities.json";

  constructor(private http: HttpClient) { }

  getCities() : Observable<City[]> {
     return this.http.get<City[]>(this.url);
  }
}
