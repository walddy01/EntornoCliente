import { CdkTableDataSourceInput } from '@angular/cdk/table';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Empleado } from '../empleado';
import { ServicioEmpleadoService } from '../servicio-empleado.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {
paginator: any;
  sort: any;
abrirDialogo() {

}
modificar(emp : Empleado) {

}
eliminar(id : Number) {

}

constructor (private httpCliente : ServicioEmpleadoService) {
  this.httpCliente.leerEmpleados().subscribe((x)=>{this.dataSource.data = x
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  });
}

dataSource = new MatTableDataSource<Empleado>;
columnas: string[] = ['id', 'nombre', 'direccion', 'cargo', 'edad', 'imagen', 'eliminar', 'modificar'];

applyFilter(event: KeyboardEvent) {

  }
}
