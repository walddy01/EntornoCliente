import { Component, OnInit, ViewChild } from '@angular/core';
import { Chat } from '../chat';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioChatService } from '../servicio-chat.service';
import { ChatP } from '../chat-p';

@Component({
  selector: 'app-chat-e',
  templateUrl: './chat-e.component.html',
  styleUrls: ['./chat-e.component.css']
})
export class ChatEComponent implements  OnInit{

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

    this.servicio.obtenerMensajesE().subscribe(x=>{
       this.dataSource.data=x
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
    this.servicio.obtenerMensajesE().subscribe(x=>{
       this.dataSource.data=x
       this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }
  
  applyFilter(event: KeyboardEvent) {
    const filtro = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filtro.trim().toLowerCase();
  }

}
