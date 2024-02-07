import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Correo } from '../correo';
import { ServicioMailService } from '../servicio-mail.service';

@Component({
  selector: 'app-enviar-mail',
  templateUrl: './enviar-mail.component.html',
  styleUrls: ['./enviar-mail.component.css']
})
export class EnviarMailComponent {

constructor(private http : ServicioMailService) { }

usuario: String = 'walddy';

email: Correo = {
  id: 0,
  origen: this.usuario,
  destinatario: '',
  mensaje: '',
  asunto: '',
  fecha: new Date().toString(),
  leido: 0
};

enviarMensaje(){
  this.http.enviarMensaje(this.email).subscribe(() => {
    console.log("Mensaje Enviado");
    this.email =  new Correo(0, this.usuario, '', '', '', new Date().toString(), 0);
  });
}

}
