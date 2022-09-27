import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ListadoComponent } from "./listado/listado.component";
import { MugiwaraComponent } from "./mugiwara/mugiwara.component";

@NgModule({
  declarations: [
    MugiwaraComponent,
    ListadoComponent
  ],
  exports: [
    ListadoComponent
  ],
  imports: [
    CommonModule
  ],
})
export class HeroesModule { }
