import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Correo } from './correo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioMailService {

  constructor(private http: HttpClient) { }

  mensajesRecibidos(usuario: String) :Observable<Correo[]> {
    return this.http.get<Correo[]>('http://moralo.atwebpages.com/serviciosMail/ObtenerMensajesMail_R.php?usuario=' + usuario);
  }

  mensajesNoLeidos(usuario: String) :Observable<Correo[]> {
    return this.http.get<Correo[]>('http://moralo.atwebpages.com/serviciosMail/ObtenerMensajesMail_RN.php?usuario=' + usuario);
  }

  mensajesEnviados(usuario: String) :Observable<Correo[]> {
    return this.http.get<Correo[]>('http://moralo.atwebpages.com/serviciosMail/ObtenerMensajesMail_E.php?usuario=' + usuario);
  }

  enviarMensaje(mail: Correo) :Observable<Correo> {
    return this.http.post<Correo>('http://moralo.atwebpages.com/serviciosMail/MandarMensajeMail.php', mail);
  }

  leerMensaje(mail: Correo){
    return this.http.post('http://moralo.atwebpages.com/serviciosMail/LeerMensaje.php', mail, {responseType: 'text'});
  }

}
