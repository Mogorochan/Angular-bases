import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent implements OnInit {

  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    },
  ];

  heroeObj: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: '',
  }

  constructor(private heroesService: HeroesService,
              private router: Router) { }

  ngOnInit(): void {
  }
  guardar(){
    if( this.heroeObj.superhero.trim().length === 0  ) {
      return;
    }

    this.heroesService.agregarHeroe( this.heroeObj )
    .subscribe( heroeObj => {
      this.router.navigate(['/heroes/editar', heroeObj.id ]);
    })
  }

}
