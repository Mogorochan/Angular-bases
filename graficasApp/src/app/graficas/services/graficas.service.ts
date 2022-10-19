import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map, delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor(private http: HttpClient) { }

  getDataDona(){
    return this.http.get('http://localhost:3000/grafica');
  }

  getUsuariosRedesSocialesDonaData() {
    return this.getDataDona()
    .pipe(
      delay(1500),
      map((data) => {
        return {
          labels: Object.keys(data),
          datasets: [{ data: Object.values(data) }],
        };
      })
    );
  }
}
