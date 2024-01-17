import { Component } from '@angular/core';
import { Mensaje } from '../mensaje';
import { ServicioChatService } from '../servicio-chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent {

  mensajes!: Mensaje[];

  constructor(private httpCliente: ServicioChatService) {
    this.httpCliente.obtenerMensajes().subscribe((x) => (this.mensajes = x));
  }

  refrescarChat() {
    this.httpCliente.obtenerMensajes().subscribe((x) => (this.mensajes = x));
  }

  mensaje: Mensaje = {
    id: 0,
    fecha: '',
    usuario: '',
    mensaje: '',
  };

  msg!: Mensaje;

  enviarMensaje() {
      this.httpCliente.altaMensaje(this.mensaje).subscribe((mensaje:Mensaje)=>{this.msg=mensaje});
  }
}
