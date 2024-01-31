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
export class AdminChatComponent  implements OnInit {
activar() {
throw new Error('Method not implemented.');
}
eliminar() {
throw new Error('Method not implemented.');
}

  miParametro: string | null;

  constructor(private router:Router, private servicio : ServicioChatService){

    // this.route.params.subscribe((x:Params)=>this.miParametro=x['name'])
    this.miParametro = sessionStorage.getItem('Nombre');
    console.log("usuario"+this.miParametro);

    //llamar al método listarVehiculos del sevicio
    this.servicio.obtenerMensajes().subscribe(x=>{
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

dataSource= new  MatTableDataSource<Chat>();

@ViewChild(MatPaginator, { static: true })
paginator!: MatPaginator;
@ViewChild(MatSort, { static: true })
sort!: MatSort;

displayedColumns: string[]=['id','usuario','mensaje','fecha', 'eliminar', 'activar'];

cerrarSesion() {
  sessionStorage.clear();
  this.router.navigate(['login']);
}

listaMensaje: Chat[] = [];

leerMensaje() {
  this.servicio.obtenerMensajes().subscribe((msg:Chat[])=>{this.listaMensaje=msg;});
}

msjchat: Chat = {
  id:0,
  usuario: '',
  fecha: '',
  mensaje: '',
}

insertarMensaje() {
  this.msjchat.usuario= sessionStorage.getItem('Nombre')!;
  this.servicio.altaMensaje(this.msjchat).subscribe((msg:Chat)=>{console.log(msg);});
}
  applyFilter(event: KeyboardEvent) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }
}