import { Injectable, Pipe } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable,of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { Auth } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseURL: string = environment.baseURL;
  private _auth: Auth | undefined;

  get auth(){
    return {...this._auth}
  }

  constructor( private http: HttpClient) { }

  verificaAutentificacion(): Observable<boolean>{
    
    if (!localStorage.getItem('token')) {
      return of(false);
    }
    return this.http.get<Auth>(`${this.baseURL}/usuarios/1`)
    .pipe(
      map( auth => {
        this._auth = auth;
        return true;
      })
    );
    
  }

  login(){
    return this.http.get<Auth>(`${this.baseURL}/usuarios/1`)
    .pipe(
      tap( auth => this._auth = auth),
      tap( auth => localStorage.setItem('token', auth.id))
    );
  }
  logout(){
    this._auth = undefined;
  }
}
