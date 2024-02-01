import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Chat } from '../chat';
import { ServicioChatService } from '../servicio-chat.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {


  // this.datasource._updateChangeSubscription();


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
    ngOnInit(): void {
      if (sessionStorage.getItem('Nombre')==null){
        this.router.navigate(['login']);
      }else {
        if (sessionStorage.getItem('Nombre')!=="admin"){
          this.router.navigate(['chat']);
        } else {
          this.router.navigate(['admin']);
        }
      }
    }

  dataSource= new  MatTableDataSource<Usuario>();

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;

  displayedColumns: string[]=['idUsuario','nombre','email','pwd', 'activo', 'bloquear', 'activar'];

  cerrarSesion() {
    sessionStorage.clear();
    this.router.navigate(['login']);
  }

  leerUsuarios() {
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

  msjchat: Chat = {
    id:0,
    usuario: '',
    fecha: '',
    mensaje: '',
  }


  bloquear(usuario: Usuario) {
    console.log(usuario);
    this.servicio.bloquearUsuario(usuario).subscribe(x=>{
      this.leerUsuarios();
    });
  }

  activar(usuario :Usuario) {
    console.log(usuario);
    this.servicio.activarUsuario(usuario).subscribe(x=>{
      this.leerUsuarios();
    })
  }

    applyFilter(event: KeyboardEvent) {
      const filtro = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filtro.trim().toLowerCase();
    }
}
