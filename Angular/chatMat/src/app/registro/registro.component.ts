import { Component } from '@angular/core';
import { ServicioChatService } from '../servicio-chat.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
constructor(private servicio : ServicioChatService){}

usuario: Usuario = {
  idUsuario: 0,
  nombre: '',
  email: '',
  pwd: '',
  activo: true
};

registro() {
  this.servicio.altaCliente(this.usuario).subscribe((us:Usuario)=>{console.log(us);});
}

}
