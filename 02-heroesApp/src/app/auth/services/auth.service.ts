import { HttpClient } from '@angular/common/http';
import { Injectable, Pipe } from '@angular/core';
import { tap } from 'rxjs/operators';
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

  login(){
    return this.http.get<Auth>(`${this.baseURL}/usuarios/1`)
    .pipe(
      tap( auth => this._auth = auth),
      tap( auth => localStorage.setItem('id', auth.id))
    );
  }
  logout(){
    this._auth = undefined;
  }
}
