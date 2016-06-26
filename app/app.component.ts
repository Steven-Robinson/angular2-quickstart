import { Component } from  '@angular/core';
import { OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

@Component({
	selector: 'my-app',
	directives: [HeroDetailComponent],
	providers: [HeroService],
	template:`
		<div class="col-md-5">
			<h2>My Heroes</h2>
			<ul class="heroes">
				<li *ngFor="let hero of heroes" 
					(click)="onSelect(hero)" 
					[class.selected]="hero === selectedHero">
					<span class="badge">{{hero.id}}</span> {{hero.name}}
				</li>
			</ul>
    	</div>
		<div class="col-md-5">
			<my-hero-detail [hero]="selectedHero"></my-hero-detail>
		</div>
		`,
})
export class AppComponent implements OnInit {
	title = 'Tour of Heroes';
	heroes: Hero[];
	selectedHero: Hero;

	constructor(private heroService: HeroService) {

	}

	ngOnInit() {
  		this.getHeroes();
	}

	getHeroes() {
		this.heroService.getHeroes()
			.then(heroes => this.heroes = heroes);
	}

	onSelect(hero: Hero) {
		this.selectedHero = hero;
	}
}