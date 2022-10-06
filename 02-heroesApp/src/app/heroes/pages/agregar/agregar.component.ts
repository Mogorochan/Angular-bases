import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent implements OnInit {

  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    },
  ];

  heroeObj: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: '',
  }

  constructor(private heroesService: HeroesService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private snackBar: MatSnackBar,
              public dialog: MatDialog) { }

  ngOnInit(): void {

    if (!this.router.url.includes('editar')) {
        return
    }

    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.heroesService.getHeroesPorId( id ) )
    )
    .subscribe( heroeObj => this.heroeObj = heroeObj );
  }


  guardar(){
    if( this.heroeObj.superhero.trim().length === 0  ) {
      return;
    }
    if ( this.heroeObj.id ) {
      // Actualizar
      this.heroesService.actualizarHeroe( this.heroeObj )
        .subscribe(heroeObj => this.mostrarSnakbar('Registro actualizado'));
      
      }else{

    this.heroesService.agregarHeroe( this.heroeObj )
   .subscribe( heroeObj => {
       this.router.navigate(['/heroes/editar', heroeObj.id ]);
       this.mostrarSnakbar('Registro creado');
    })
  }
  }
  borrarHeroe(){
    const dialog = this.dialog.open(ConfirmarComponent, {
      width: '250',
      data: this.heroeObj
    });
    dialog.afterClosed()
    .pipe(
      switchMap((result) => (result) ? this.heroesService.borrarHeroe(this.heroeObj.id!) :
      this.router.navigate([`heroes/editar/$[this.heroeObj.id]`])))
      .subscribe(
        (heroe) =>{
          if (heroe){
            this.router.navigate(['heroes'])
          }
        }
      )
   
   
  }

  mostrarSnakbar( mensaje: string ) {

    this.snackBar.open(mensaje, 'ok!', {
      duration: 2500
    });
  }


}

//console.log(this.heroeObj = heroeObj, heroeObj));