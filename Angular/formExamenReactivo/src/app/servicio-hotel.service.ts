import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Parador } from './parador';

@Injectable({
  providedIn: 'root'
})
export class ServicioHotelService {

  constructor(private http: HttpClient ) { }

  obtenerParadores(): Observable<Parador[]> {
    return this.http.get<Parador[]>("http://moralo.atwebpages.com/paradores/obtenerParadores.php");
  }

}
