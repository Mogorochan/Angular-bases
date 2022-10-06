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
     return this.http.get<Heroe[]>(`${this.baseURL}/heroes`);
    }
    
  getHeroesPorId( id: string): Observable<Heroe>{
    return this.http.get<Heroe>(`${this.baseURL}/heroes/${id}`);  
  }

  getSugerencias(termino: string): Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.baseURL}/heroes?q=${termino}&_limit=6`);
  }
  agregarHeroe( heroe: Heroe ): Observable<Heroe> {
    return this.http.post<Heroe>(`${ this.baseURL}/heroes`, heroe );
  }
  actualizarHeroe( heroe: Heroe ): Observable<Heroe> {
    return this.http.put<Heroe>(`${ this.baseURL}/heroes/${heroe.id}`, heroe );
  }
  borrarHeroe( id: string): Observable<any>{
    return this.http.delete<any>(`${this.baseURL}/heroes/${id}`);  
  }
}
