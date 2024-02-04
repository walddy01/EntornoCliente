import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './usuario';
import { Chat } from './chat';
import { Observable } from 'rxjs';
import { formatDate } from '@angular/common';
import { ChatP } from './chat-p';

@Injectable({
  providedIn: 'root'
})
export class ServicioChatService {

  constructor(private httpCliente: HttpClient, @Inject(LOCALE_ID) public locale :string) { }

  altaMensaje(msg: Chat){
    let fecha = new Date;
    msg.fecha=formatDate(fecha, "HH:mm:ss/dd-MM-yyyy", this.locale);
    return this.httpCliente.post<Chat>("http://moralo.atwebpages.com/menuAjax/chat/AltaMensaje.php", msg)
  }

  altaCliente(user: Usuario){
    return this.httpCliente.post<Usuario>("http://moralo.atwebpages.com/menuAjax/chat/AltaUsuario.php", user);
  }

  obtenerMensajes() :Observable<Chat[]>{
    return this.httpCliente.get<Chat[]>("http://moralo.atwebpages.com/chat/ObtenerMensajes.php")
  }

  obtenerMensajesActivos() :Observable<Chat[]>{
    return this.httpCliente.get<Chat[]>("http://moralo.atwebpages.com/chat/ObtenerMensajes2.php")
  }

  bloquearMensaje(msg: Chat) {
    return this.httpCliente.post<Chat>("http://moralo.atwebpages.com/chat/BloquearMensaje.php", msg);
  }

  activarMensaje(msg: Chat) {
    return this.httpCliente.post<Chat>("http://moralo.atwebpages.com/chat/ActivarMensaje.php", msg);
  }

  altaMensajeP(msg: Chat){
    let fecha = new Date;
    msg.fecha=formatDate(fecha, "HH:mm:ss/dd-MM-yyyy", this.locale);
    return this.httpCliente.post<Chat>("http://moralo.atwebpages.com/menuAjax/chat/AltaMensaje.php", msg)
  }

  obtenerMensajesE() :Observable<ChatP[]>{
    return this.httpCliente.get<ChatP[]>("http://moralo.atwebpages.com/menuAjax/chat/ObtenerMensajesE.php?usuario="+sessionStorage.getItem('Nombre'))
  }

  obtenerMensajesP() :Observable<ChatP[]>{
    return this.httpCliente.get<ChatP[]>("http://moralo.atwebpages.com/menuAjax/chat/ObtenerMensajesP.php?usuario="+sessionStorage.getItem('Nombre'))
  }

  seleccionarUsuario(user: Usuario) :Observable<Usuario[]>{
    return this.httpCliente.get<Usuario[]>("http://moralo.atwebpages.com/menuAjax/chat/SeleccionarUsuario.php?email="+user.email+"&pwd="+user.pwd);
  }

  obtenerUsuarios() :Observable<Usuario[]>{
    return this.httpCliente.get<Usuario[]>("http://moralo.atwebpages.com/chat/ObtenerUsuarios.php")
  }

  bloquearUsuario(user: Usuario) {
    return this.httpCliente.post<Usuario>("http://moralo.atwebpages.com/chat/BloquearUsuario.php", user);
  }

  activarUsuario(user: Usuario) {
    return this.httpCliente.post<Usuario>("http://moralo.atwebpages.com/chat/ActivarUsuario.php", user);
  }
}
