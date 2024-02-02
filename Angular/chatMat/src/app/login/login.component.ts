import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioChatService } from '../servicio-chat.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router:Router, private servicio : ServicioChatService){}

  usuario: Usuario = {
    idUsuario: 0,
    nombre: '',
    email: '',
    pwd: '',
    activo: true
  };

  privado: boolean = false;
  logear() {
    this.servicio.seleccionarUsuario(this.usuario).subscribe((us:Usuario[])=>{
      if (us!=null){
        alert("Logueado correctamente. " + us[0].nombre);
        sessionStorage.setItem("Nombre", us[0].nombre);

        if(this.privado){
          console.log("Entrando a chat privado");
          this.router.navigate(['privado']);
        }else {
          if (us[0].nombre == "admin"){
            this.router.navigate(['admin']);
          } else {
            this.router.navigate(['chat']);
          }
        }

      } else {
        alert("Usuario no encontrado o bloqueado.");
      }
    })




    // this.servicio.seleccionarUsuario(this.usuario).subscribe((us:Usuario[])=>{
    //   if (us!=null){
    //     alert("Logueado correctamente. " + us[0].nombre);

    //     sessionStorage.setItem("Nombre", us[0].nombre);
    //     if (us[0].nombre == "admin"){
    //       this.router.navigate(['admin'], {queryParams: {'nombre': us[0].nombre}});
    //     } else {
    //       this.router.navigate(['chat'], {queryParams: {'nombre': us[0].nombre}});
    //     }
    //   } else {
    //     alert("Usuario no encontrado o bloqueado.");
    //   }
    // })
  }

}
