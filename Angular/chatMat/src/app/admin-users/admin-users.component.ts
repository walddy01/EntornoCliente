import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ServicioChatService } from '../servicio-chat.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent {
eliminar() {
throw new Error('Method not implemented.');
}
activar() {
throw new Error('Method not implemented.');
}
  dataSource= new  MatTableDataSource<Usuario>();

  constructor(private router:Router, private servicio : ServicioChatService){

    //llamar al método listarVehiculos del sevicio
    this.servicio.obtenerUsuarios().subscribe(x=>{
      //listacompleta que inyecta datos al atributo datasource de tabla
       this.dataSource.data=x
      //filtro de paginación
       this.dataSource.paginator = this.paginator;
       //filtro para ordenación
        this.dataSource.sort = this.sort;
      });
  }



displayedColumns: string[]=['idUsuario','nombre','email','pwd', 'activo', 'bloquear', 'activar'];

@ViewChild(MatPaginator, { static: true })
paginator!: MatPaginator;
@ViewChild(MatSort, { static: true })
sort!: MatSort;

  applyFilter(event: KeyboardEvent) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }

  cerrarSesion() {
    sessionStorage.clear();
    this.router.navigate(['login']);
  }
}
