import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/onePiece.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent{


  @Input('nuevoHijo')  nuevo: Personaje = {
    nombre: 'Sanji',
    recompensa: '77.000.000 B'
  }
  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar(){
    console.log(this.nuevo);

    this.onNuevoPersonaje.emit(this.nuevo);

    this.nuevo = {
      nombre: '',
      recompensa: ''
    }

  }

}
