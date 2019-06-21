import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SwapiService } from '../swapi/swapi.service';
import { Hero } from '../swapi/models/hero';

@Component({
  selector: 'app-heroe-details',
  templateUrl: './heroe-details.page.html',
  styleUrls: ['./heroe-details.page.scss'],
})
export class HeroeDetailsPage implements OnInit, OnDestroy {
  private routeSubscrition: any;
  public hero: Hero;

  constructor(private service: SwapiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.routeSubscrition = this.route.params.subscribe(params => {
      const heroId = + params['id']; 
      this.getHeroById(heroId);
    })
  }

  getHeroById(id: number) {
    this.service.getHeroeById(id).subscribe(
      hero => {
        this.hero = hero;
      },
      err => {
        // Show Toast
      }
    );
  }

  ngOnDestroy() {
    this.routeSubscrition.unsubscribe();
  }

}
