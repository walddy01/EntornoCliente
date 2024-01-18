import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from './empleado';

@Injectable({
  providedIn: 'root'
})
export class ServicioEmpleadoService {

  constructor(private httpCliente : HttpClient) {}

  leerEmpleados(): Observable<Empleado[]> {
    return this.httpCliente.get<Empleado[]>('http://moralo.atwebpages.com/ajaxListar/getTodoPersonal.php');
  }

  insertarEmpleado(empleado: Empleado): Observable<Empleado> {
    return this.httpCliente.post<Empleado>('http://moralo.atwebpages.com/ajaxListar/create_persona.php', empleado);
  }

  eliminarEmpleado(id: number): Observable<Empleado> {
    return this.httpCliente.delete<Empleado>('http://moralo.atwebpages.com/ajaxListar/delete_persona.php/?id=' + id);
  }

  modificarEmpleado(empleado: Empleado): Observable<Empleado> {
    return this.httpCliente.put<Empleado>('http://moralo.atwebpages.com/ajaxListar/update_persona.php', empleado);
  }
}
