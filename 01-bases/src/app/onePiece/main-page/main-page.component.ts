import { Component} from '@angular/core';
import { Personaje } from '../interfaces/onePiece.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent{

  personajes: Personaje[] = [
    {
      nombre: 'Luffy',
      recompensa: '300.000.000B'
  },
  {
      nombre: 'Zoro',
      recompensa: '120.000.000B'
  },
  {
      nombre: 'Nami',
      recompensa: '16.000.000B'
  }

];

  nuevo: Personaje = {
    nombre: 'Sanji',
    recompensa: '77.000.000 B'
  }

  agregar(){
    console.log(this.nuevo);
    this.personajes.push(this.nuevo);
    this.nuevo = {
      nombre: '',
      recompensa: ''
    }
  }

}
