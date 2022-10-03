import { Component } from '@angular/core';

//servicio
import { OnePieceService } from '../services/onePiece.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent{

get personajes(){
    return this.OnePieceService.getPersonajes;
  }


  constructor( private OnePieceService: OnePieceService){}

}
