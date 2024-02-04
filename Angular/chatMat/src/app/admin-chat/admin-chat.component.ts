import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Chat } from '../chat';
import { ServicioChatService } from '../servicio-chat.service';

@Component({
  selector: 'app-admin-chat',
  templateUrl: './admin-chat.component.html',
  styleUrls: ['./admin-chat.component.css']
})
export class AdminChatComponent implements OnInit {
  eliminar(mensaje: Chat) {
    console.log(mensaje);
    this.servicio.bloquearMensaje(mensaje).subscribe(x => {
      this.leerMensaje();
    });
  }

  activar(mensaje: Chat) {
    console.log(mensaje);
    this.servicio.activarMensaje(mensaje).subscribe(x => {
      this.leerMensaje();
    })
  }

  miParametro: string | null;

  constructor(private router: Router, private servicio: ServicioChatService) {
    this.miParametro = sessionStorage.getItem('Nombre');
    console.log("usuario" + this.miParametro);


    this.servicio.obtenerMensajes().subscribe(x => {
      this.dataSource.data = x
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  ngOnInit(): void {
    if (sessionStorage.getItem('Nombre') == null) {
      this.router.navigate(['login']);
    } else {
      if (sessionStorage.getItem('Nombre') !== "admin") {
        this.router.navigate(['chat']);
      } else {
        this.router.navigate(['admin']);
      }
    }
  }

  dataSource = new MatTableDataSource<Chat>();

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;

  displayedColumns: string[] = ['id', 'usuario', 'mensaje', 'fecha', 'activo', 'eliminar', 'activar'];

  cerrarSesion() {
    sessionStorage.clear();
    this.router.navigate(['login']);
  }
  
  leerMensaje() {
    this.servicio.obtenerMensajes().subscribe(x => {
      this.dataSource.data = x
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  msjchat: Chat = {
    id: 0,
    usuario: '',
    fecha: '',
    mensaje: '',
  }

  insertarMensaje() {
    this.msjchat.usuario = sessionStorage.getItem('Nombre')!;
    this.servicio.altaMensaje(this.msjchat).subscribe((msg: Chat) => {
      console.log(msg);
      this.leerMensaje();
    });
  }
  applyFilter(event: KeyboardEvent) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }
}
