import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/onePiece.interface';
import { OnePieceService } from '../services/onePiece.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent{


  @Input('nuevoHijo')  nuevo: Personaje = {
    nombre: 'Sanji',
    recompensa: '77.000.000 B'
  }
  /*@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
  this.onNuevoPersonaje.emit(this.nuevo);*/

constructor(private OnePieceService: OnePieceService){}

  agregar(){

    this.OnePieceService.agregarPersonaje(this.nuevo);

    console.log(this.nuevo);
    this.nuevo = {
      nombre: '',
      recompensa: ''
    }

  }

}
