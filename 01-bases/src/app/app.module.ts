import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { AcumuladorModule } from './acumulador/contador.module';
import { HeroesModule } from './heroes/heroes.module';
import { OnePieceModule } from './onePiece/one-piece.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    AcumuladorModule,
    OnePieceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
