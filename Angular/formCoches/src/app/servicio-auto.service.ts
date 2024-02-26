import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Coche } from './coche';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioAutoService {

  constructor(private htpp : HttpClient) { }

  insertarCoche(coche: Coche) {
    return this.htpp.post("http://moralo.atwebpages.com/vehiculos/insertarCoche.php", coche);
  };

  obtenerCoches() : Observable<Coche[]> {
    return this.htpp.get<Coche[]>("http://moralo.atwebpages.com/vehiculos/obtenerCoches.php");
  }
}
