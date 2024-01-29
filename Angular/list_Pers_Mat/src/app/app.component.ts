import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Empleado } from './empleado';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'list_Pers_Mat';
  columnas: string[] = ['id', 'nombre', 'direccion', 'cargo' , 'edad' , 'imagen','borrar', 'modificar'];
  datos: Empleado[] =[];
  urlString:string="http://moralo.atwebpages.com/ajaxListar/getTodoPersonal.php"
  ds=new MatTableDataSource<Empleado>();
  constructor( private httpCliente: HttpClient){
    this.httpCliente.
    get<Empleado[]>(this.urlString).subscribe((res)=>{  this.ds.data = res; });
   }

}
