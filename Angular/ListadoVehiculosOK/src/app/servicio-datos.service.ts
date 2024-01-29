import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehiculo } from './vehiculo';

@Injectable({
  providedIn: 'root'
})
export class ServicioDatosService {

  constructor(private http: HttpClient) { }
  //método lista contenido del fichero JSON
  listarVehiculos():Observable<Vehiculo[]>{
     const url ="https://random-data-api.com/api/vehicle/random_vehicle?size=100"
     return this.http.get<Vehiculo[]>(url);
  }
}
