import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent{

  nombre = 'Iron Man';
  edad = 45

  get nombreCapitalizado(){
    return this.nombre.toLocaleUpperCase();
  }

  obtenerNombre(){
    return `${this.nombre} - ${this.edad}`;
  }

  cambiarNombre(){
    this.nombre = 'Spiderman';
  }

  cambiarEdad(){
    this.edad = 19;
  }
}
