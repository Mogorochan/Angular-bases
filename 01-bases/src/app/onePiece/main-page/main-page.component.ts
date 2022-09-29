import { Component} from '@angular/core';

interface Personaje{
  nombre: string;
  recompensa: string;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent{

  nuevo: Personaje = {
    nombre: 'Sanji',
    recompensa: '77.000.000 B'
  }

  agregar(){
    console.log(this.nuevo);
  }

}
