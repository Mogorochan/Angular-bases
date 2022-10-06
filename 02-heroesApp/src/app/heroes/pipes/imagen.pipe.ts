import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(listarHeroes: Heroe): string {

    if(!listarHeroes.id || listarHeroes.hasOwnProperty('alt_img') && listarHeroes.alt_img ){
      return `assets/no-image.png`;
    }else if(listarHeroes.alt_img){
      return listarHeroes.alt_img;
    }else{
      
      return `assets/heroes/${listarHeroes.id}.jpg`;
    }
  }

}
