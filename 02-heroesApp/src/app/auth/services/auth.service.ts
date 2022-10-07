import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Auth } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseURL: string = environment.baseURL;

  constructor( private http: HttpClient,
               ) { }

  login(){
    return this.http.get<Auth>(`${this.baseURL}/usuarios/1`);
  }
}
