import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/onePiece.interface';

@Injectable()
export class OnePieceService {

  private _personajes: Personaje[] = [
    {
      nombre: 'Luffy',
      recompensa: '300.000.000B',
    },
    {
      nombre: 'Zoro',
      recompensa: '120.000.000B',
    },
    {
      nombre: 'Nami',
      recompensa: '16.000.000B',
    },
  ];


  get getPersonajes() : Personaje[] {
    return [...this._personajes];
  }

  agregarPersonaje(data: Personaje){
      this._personajes.push( data);
  }
}
