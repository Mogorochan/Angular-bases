import { Component } from '@angular/core';

//interface
import { Personaje } from '../interfaces/onePiece.interface';
//servicio
import { OnePieceService } from '../services/onePiece.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  nuevo: Personaje = {
    nombre: '',
    recompensa: '',
  };
  constructor() {}
}
