import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SwapiService } from '../swapi/swapi.service';
import { HeroList } from '../swapi/models/hero-list';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.page.html',
  styleUrls: ['./heroes.page.scss'],
})
export class HeroesPage implements OnInit {
  heroList: HeroList = new HeroList();
  currentPage = 1;
  rowsPerPage = 10;
  maxPages: number;

  constructor(private service: SwapiService, private router: Router) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.service.getHeroes().subscribe(
      heroList => {
        this.heroList = heroList;
        this.calcMaxPage(heroList.count);
      },
      err => {
        // Show Toast
      }
    );
  }

  getNextPage(currentPage: number) {
    const nextPage = currentPage + 1;
    this.service.getHeroesByPage(nextPage).subscribe(
      heroList => {
        this.heroList = heroList;
        this.currentPage = nextPage;
      },
      err => {
        // Show Toast
      }
    );
  }

  getPreviousPage(currentPage: number) {
    const previousPage = currentPage - 1;
    this.service.getHeroesByPage(previousPage).subscribe(
      heroList => {
        this.heroList = heroList;
        this.currentPage = previousPage;
      },
      err => {
        // Show Toast
      }
    );
  }

  calcMaxPage(totalCount: number){
    this.maxPages = Math.ceil(totalCount / this.rowsPerPage);
  }

  goToDetails(heroUrl: string) {
    const heroUrlSegments = heroUrl.split('/'),
      heroId = heroUrlSegments[5];
      this.router.navigateByUrl('/heroes/' + heroId);
  }
}
