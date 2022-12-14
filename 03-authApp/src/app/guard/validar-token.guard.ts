import { Injectable } from '@angular/core';
import {  CanActivate, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap} from 'rxjs/operators';
import { AuthService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ValidarTokenGuard implements CanActivate, CanLoad {
  
  constructor(private authservice: AuthService,
              private router: Router){}

  canActivate(): Observable<boolean> | boolean{
    console.log('te dejo activarlo');
    return this.authservice.validarToken()
    .pipe(
      tap( valid => {
        if (!valid) {
          this.router.navigateByUrl('/auth');
        }
      })
    );
  }

  canLoad(): Observable<boolean> | boolean   {
    console.log('te dejo cargarlo');
    return this.authservice.validarToken()
    .pipe(
      tap( valid => {
        if (!valid) {
          this.router.navigateByUrl('/auth');
        }
      })
    );
  }
}
