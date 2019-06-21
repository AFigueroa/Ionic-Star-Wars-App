import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { HeroList } from './models/hero-list';
import { Hero } from './models/hero';

@Injectable({
  providedIn: 'root'
})

export class SwapiService {
  baseUrl = 'https://swapi.co/api/';

  constructor(private http: HttpClient) {}

  getHeroes(): Observable<HeroList> {
    const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json'
        })
    };

    return this.http.get<HeroList>(this.baseUrl + 'people', httpOptions);
  }

  getHeroesByPage(page: number): Observable<HeroList> {
    let params = new HttpParams();
    params = params.append('page', page.toString());

    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type':  'application/json'
      }),
      params: params
    };

    return this.http.get<HeroList>(this.baseUrl + 'people/', httpOptions);
  }

  getHeroeById(id: number): Observable<Hero> {
    const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json'
        })
    };

    return this.http.get<Hero>(this.baseUrl + 'people/' + id, httpOptions);
  }
  

}
