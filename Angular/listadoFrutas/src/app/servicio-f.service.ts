import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fruta } from './fruta';
@Injectable({
  providedIn: 'root'
})
export class ServicioFService {

  constructor(private http: HttpClient) { }
  leerProductos():Observable<Fruta[]>{
    return this.http.get<Fruta[]>("http://moralo.atwebpages.com/menuAjax/productos2/index.php");
  }
}
