import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { Mensaje } from './mensaje';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { formatDate } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class ServicioChatService {

  constructor(private httpCliente: HttpClient, @Inject(LOCALE_ID) public locale:string) { }

  obtenerMensajes(): Observable<Mensaje[]> {
    return this.httpCliente.get<Mensaje[]>('http://moralo.atwebpages.com/menuAjax/chat/ObtenerMensajes.php');

  }

  altaMensaje(mensaje: Mensaje): Observable<Mensaje>{
    mensaje.fecha = formatDate(Date.now(),"HH:mm:ss / dd-MM-yy", this.locale);
    console.log("Mensaje: "+mensaje.mensaje)
        return this.httpCliente.post<Mensaje>('http://moralo.atwebpages.com/menuAjax/chat/AltaMensaje.php', mensaje);
    }
}
