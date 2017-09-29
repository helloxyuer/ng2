import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from './hero';
import { HeroService } from './hero.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector:'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  public imgsrc:string = 'http://images.cdn.logibeat.com/images/biz/20161124/7b937e60-ee46-4ad6-b05e-57c5ed1538b4.jpg';
  public isUnchanged:boolean = false;
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
      .subscribe(hero => this.hero = hero);
  }

  trunUnchanged():void{
   this.isUnchanged = !this.isUnchanged;
   console.log(this.isUnchanged);
   console.log(document.querySelector('#switch').getAttribute('disabled'))
  }
  goBack(): void {
    this.location.back();
  }

  @Input() hero: Hero;
}
