import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html'
})
export class BuscarComponent implements OnInit {

  termino: string = '';
  buscarHeroes: Heroe[] = [];
  heroeSeleccionado: Heroe | undefined;

  constructor(private heroeService: HeroesService) { }

  ngOnInit(): void {
  }

  buscando(){
    this.heroeService.getSugerencias(this.termino.trim())
    .subscribe(buscarHeroes => this.buscarHeroes = buscarHeroes);
  }

  opcionSeleccionada(event: MatAutocompleteSelectedEvent){
    if(!event.option.value) {
      this.heroeSeleccionado = undefined;
      return;
    }
    const selectHeroe: Heroe = event.option.value;
    this.termino = selectHeroe.superhero;

    this.heroeService.getHeroesPorId( selectHeroe.id! )
    .subscribe( selectHeroe => this.heroeSeleccionado = selectHeroe );
  }

}
