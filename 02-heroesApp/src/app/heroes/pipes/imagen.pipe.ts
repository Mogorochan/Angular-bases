import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(listarHeroes: Heroe): string {
    return `assets/heroes/${listarHeroes.id}.jpg`;
  }

}
