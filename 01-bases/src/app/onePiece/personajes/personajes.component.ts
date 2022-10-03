import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/onePiece.interface';
//servicio
import { OnePieceService } from '../services/onePiece.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent{

  //@Input('personajesHijo') personajes: Personaje [] = [];


get personajes(){
    return this.OnePieceService.getPersonajes;
  }


  constructor( private OnePieceService: OnePieceService){}

}
