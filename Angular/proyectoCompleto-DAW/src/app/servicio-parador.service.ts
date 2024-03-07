import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Parador } from './parador';

@Injectable({
  providedIn: 'root'
})
export class FormularioServiciService {

  constructor(private http:HttpClient) { }

  obtenerParador():Observable<Parador[]>{
    return this.http.get<Parador[]>("http://moralo.atwebpages.com/paradores/obtenerParadores.php");
  }
}
