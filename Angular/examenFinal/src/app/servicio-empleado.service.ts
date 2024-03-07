import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from './empleado';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioEmpleadoService {

  constructor(private httpClient: HttpClient) { }

  obtenerEmpleados(): Observable<Empleado[]> {
    return this.httpClient.get<Empleado[]>("http://moralo.atwebpages.com/Empleados/getEmpleados.php");
  }

  enviarEmpleado(empleado: Empleado): Observable<Empleado> {
    return this.httpClient.post<Empleado>("http://moralo.atwebpages.com/Empleados/insertarEmpleado.php", empleado);
  }

}
