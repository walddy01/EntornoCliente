import { Component, OnInit, ViewChild } from '@angular/core';
import { Chat } from '../chat';
import { ServicioChatService } from '../servicio-chat.service';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements  OnInit{

dataSource= new  MatTableDataSource<Chat>();

@ViewChild(MatPaginator, { static: true })
paginator!: MatPaginator;
@ViewChild(MatSort, { static: true })
sort!: MatSort;

displayedColumns: string[]=['id','usuario','mensaje','fecha'];

miParametro: any;

constructor(private route:ActivatedRoute, private router:Router, private servicio : ServicioChatService){

  // this.route.params.subscribe((x:Params)=>this.miParametro=x['name'])
  this.miParametro = sessionStorage.getItem('Nombre');
  console.log("usuario"+this.miParametro);

  //llamar al método listarVehiculos del sevicio
  this.servicio.obtenerMensajesActivos().subscribe(x=>{
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
      if (sessionStorage.getItem('Nombre')=="admin"){
        this.router.navigate(['admin']);
      }
    }
  }

msjchat: Chat = {
  id:0,
  usuario: '',
  fecha: '',
  mensaje: '',
}

leerMensaje() {
  this.servicio.obtenerMensajesActivos().subscribe(x=>{
    //listacompleta que inyecta datos al atributo datasource de tabla
     this.dataSource.data=x
    //filtro de paginación
     this.dataSource.paginator = this.paginator;
     //filtro para ordenación
      this.dataSource.sort = this.sort;
    });
}

insertarMensaje() {
  this.msjchat.usuario= sessionStorage.getItem('Nombre')!;
  this.servicio.altaMensaje(this.msjchat).subscribe((msg:Chat)=>{console.log(msg);});
}

cerrarSesion() {
  sessionStorage.clear();
  this.router.navigate(['login']);
}

applyFilter(event: KeyboardEvent) {
  const filtro = (event.target as HTMLInputElement).value;
this.dataSource.filter = filtro.trim().toLowerCase();
}
}
