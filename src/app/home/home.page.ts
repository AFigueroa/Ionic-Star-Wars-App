import { Component } from '@angular/core';

import {Hero} from '../swapi/models/hero';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public heroes: Array<Hero> = [];

  constructor() {}

  
  
}
