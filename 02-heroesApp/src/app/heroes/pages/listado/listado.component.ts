import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html', 
  styles: [`
    mat-card{
      margin-top: 15px
    }
  `]
})
export class ListadoComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(private HeroesService: HeroesService) { }

  ngOnInit(): void {
    this.HeroesService.getHeroes()
    .subscribe(lHeroes =>  this.heroes = lHeroes);
  }

}
