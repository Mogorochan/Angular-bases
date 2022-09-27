import { Component } from '@angular/core';

@Component({
  selector: 'app-mugiwara',
  templateUrl: './mugiwara.component.html'
})
export class MugiwaraComponent{

  nombre: string = 'Iron Man';
  edad: number = 45

  get nombreCapitalizado(): string{
    return this.nombre.toLocaleUpperCase();
  }

  obtenerNombre():string{
    return `${this.nombre} - ${this.edad}`;
  }

  cambiarNombre(): void{
    this.nombre = 'Spiderman';
  }

  cambiarEdad(): void{
    this.edad = 19;
  }
}
