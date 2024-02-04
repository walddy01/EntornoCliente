import { Component, OnInit, ViewChild } from '@angular/core';
import { ChatP } from '../chat-p';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { ServicioChatService } from '../servicio-chat.service';
import { Chat } from '../chat';

@Component({
  selector: 'app-chat-p',
  templateUrl: './chat-p.component.html',
  styleUrls: ['./chat-p.component.css']
})
export class ChatPComponent implements  OnInit{

  dataSource= new  MatTableDataSource<ChatP>();
  
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;
  
  displayedColumns: string[]=['id','fecha','usuario','mensaje', 'destinatario'];
  
  miParametro: any;
  
  constructor(private route:ActivatedRoute, private router:Router, private servicio : ServicioChatService){
    this.miParametro = sessionStorage.getItem('Nombre');
    console.log("usuario"+this.miParametro);
  
    this.servicio.obtenerMensajesP().subscribe(x=>{
       this.dataSource.data=x;
       this.dataSource.paginator = this.paginator;
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
  
  msjchat: ChatP = {
    id: 0,
    fecha: '',
    usuario: '',
    mensaje: '',
    destinatario: ''
  }
  
  leerMensaje() {
    this.servicio.obtenerMensajesP().subscribe(x=>{
       this.dataSource.data=x
       this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }
  
  destinatario!: string;
  insertarMensaje() {
    this.msjchat.usuario= sessionStorage.getItem('Nombre')!;
    this.msjchat.destinatario= this.destinatario;
    this.servicio.altaMensajeP(this.msjchat).subscribe((msg:ChatP)=>{console.log(msg);});
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
