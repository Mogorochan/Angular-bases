import { Component } from '@angular/core';

@Component({
  selector: 'app-acumulador',
  template: `

  <h1>{{ title }}</h1>
  <h3>La base es: {{ base }}</h3>

  <button (click)="acumular(-base)">- {{ base }}</button>

  <span> {{ numero }}</span>

  <button (click)="acumular(base)">+ {{ base }}</button>
`
})
export class AcumuladorComponent{
  title: string = 'Ejercicio acumulador';
  numero: number = 0;

  //función(ojo, es necesario usar This acá)

  base: number = 5;

  acumular(valor: number){
    this.numero += valor;
  }


}
