import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehiculo } from './vehiculo';


@Injectable({
  providedIn: 'root'
})
export class ServicioDatosService {

  constructor(private http: HttpClient) { }
  listarVehiculos(): Observable<Vehiculo[]> {
    const url = "https://random-data-api.com/api/vehicle/random_vehicle?size=100";
    return this.http.get<Vehiculo[]>(url);
  }
}
