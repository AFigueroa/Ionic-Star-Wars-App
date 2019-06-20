import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../swapi/swapi.service';

import {Hero} from '../swapi/models/hero';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  public heroes: Array<Hero> = [];

  constructor(private service: SwapiService) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.service.getHeroes().subscribe(
      heroes => {
        this.heroes = heroes;
      },
      err => {
        // Show Toast
      }
    );
  }
  
}
