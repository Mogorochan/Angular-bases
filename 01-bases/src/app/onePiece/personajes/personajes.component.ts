import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/onePiece.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent{

  @Input('personajesHijo') personajes: Personaje [] = [];

}
