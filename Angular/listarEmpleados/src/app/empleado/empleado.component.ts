import { CdkTableDataSourceInput } from '@angular/cdk/table';
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CuadroDialogoComponent } from '../cuadro-dialogo/cuadro-dialogo.component';
import { Empleado } from '../empleado';
import { ServicioEmpleadoService } from '../servicio-empleado.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {
@ViewChild(MatPaginator) paginator!: MatPaginator;
@ViewChild(MatSort) sort!: MatSort;

empleado !: Empleado;
abrirDialogo() {
const dialogo = this.dialogo.open(CuadroDialogoComponent, {data: new Empleado(0, '', '', '', 0, '')});
dialogo.afterClosed().subscribe(x => {
  console.log(x);
  if(x != undefined) {
  this.httpCliente.insertarEmpleado(x).subscribe(resultado=>this.empleado);
  }
})
}
modificar(emp : Empleado) {
const dialogo = this.dialogo.open(CuadroDialogoComponent, {data: new Empleado(emp.id, emp.nombre, emp.direccion, emp.cargo, emp.edad, emp.imagen)});
console.log("contenido del dialogo " + emp.nombre);
dialogo.afterClosed().subscribe(x => {
  this.httpCliente.modificarEmpleado(x).subscribe((resultado)=>{
    this.leerEmpleados();
  })
})
}
eliminar(id : number) {
  if(confirm('¿Estás seguro de que quieres eliminar ' + id + '?')){
    this.httpCliente.eliminarEmpleado(id).subscribe((x)=>{
      alert('Se ha eliminado el registro ' + id);
      this.leerEmpleados();
    })
  }
}

constructor (private httpCliente : ServicioEmpleadoService, private dialogo: MatDialog) {
  this.httpCliente.leerEmpleados().subscribe((x)=>{this.dataSource.data = x
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  });
}

leerEmpleados(){
  this.httpCliente.leerEmpleados().subscribe((x)=>{this.dataSource.data = x
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  });
}
dataSource = new MatTableDataSource<Empleado>;
columnas: string[] = ['id', 'nombre', 'direccion', 'cargo', 'edad', 'imagen', 'eliminar', 'modificar'];

applyFilter(event: KeyboardEvent) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }

  }
}
