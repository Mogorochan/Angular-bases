import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{
  nakamas: string[] = ['Luffy','Nami','Zoro','Sanji','Chopper','Robi' ];
  nakamaBorrado: string = '';

  borrarNakama(){
    this.nakamaBorrado = this.nakamas.shift() || '';
  }


}


