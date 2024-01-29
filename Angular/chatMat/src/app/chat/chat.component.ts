import { Component, ViewChild } from '@angular/core';
import { Chat } from '../chat';
import { ServicioChatService } from '../servicio-chat.service';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

dataSource= new  MatTableDataSource<Chat>();

@ViewChild(MatPaginator, { static: true })
paginator!: MatPaginator;
@ViewChild(MatSort, { static: true })
sort!: MatSort;

displayedColumns: string[]=['id','usuario','mensaje','fecha'];


listaMensaje: Chat[] = [];

constructor(private servicio : ServicioChatService){
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

msjchat: Chat = {
  id:0,
  usuario: '',
  fecha: '',
  mensaje: '',
}

leerMensaje() {
  this.servicio.obtenerMensajes().subscribe((msg:Chat[])=>{this.listaMensaje=msg;});
}

insertarMensaje() {
  this.servicio.altaMensaje(this.msjchat).subscribe((msg:Chat)=>{console.log(msg);});
}

applyFilter(event: KeyboardEvent) {
  const filtro = (event.target as HTMLInputElement).value;
this.dataSource.filter = filtro.trim().toLowerCase();
}
}
