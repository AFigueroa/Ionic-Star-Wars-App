import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Hero } from './models/hero';

@Injectable({
  providedIn: 'root'
})

export class SwapiService {
  baseUrl = 'https://swapi.co/api/';

  constructor(private http: HttpClient) {}

  getHeroes(): Observable<Array<Hero>> {
    const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json'
        })
    };

    return this.http.get<Array<Hero>>(this.baseUrl + 'people', httpOptions);
  }

  getHeroeById(id: string): Observable<Hero> {
    const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json'
        })
    };

    return this.http.get<Hero>(this.baseUrl + 'people/' + id, httpOptions);
  }

}
