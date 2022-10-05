import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroe } from '../interfaces/heroes.interface';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private baseURL: String = environment.baseURL;

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Heroe[]>{
     return this.http.get<Heroe[]>(`${this.baseURL}/heroes`)
    }
    
    getHeroesPorId( id: string): Observable<Heroe>{
      return this.http.get<Heroe>(`${this.baseURL}/heroes/${id}`)
      
  }
}
