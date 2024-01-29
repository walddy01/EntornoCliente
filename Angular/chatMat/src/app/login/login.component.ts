import { Component } from '@angular/core';
import { ServicioChatService } from '../servicio-chat.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private servicio : ServicioChatService){}

  usuario: Usuario = {
    idUsuario: 0,
    nombre: '',
    email: '',
    pwd: '',
    activo: true
  };

  logear() {
    this.servicio.seleccionarUsuario(this.usuario).subscribe((us:Usuario)=>{
      if (us!=null){
        alert("Logueado correctamente. ");
      }
    })
  }

}
