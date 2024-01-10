import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { Empleado } from './empleado';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'listadoPersonal';
  columnas: string[] = [
    'id',
    'nombre',
    'direccion',
    'cargo',
    'edad',
    'imagen'
  ];
urlString = 'http://moralo.atwebpages.com/ajaxListar/getTodoPersonal.php';
ds=new MatTableDataSource<Empleado>();
datos: Empleado[] =[];
constructor( private httpCliente: HttpClient){

}
  ngOnInit(): void {
    this.httpCliente.get<Empleado[]>(this.urlString).subscribe((res)=>{  this.ds.data = res; this.datos=res});
   }
}
