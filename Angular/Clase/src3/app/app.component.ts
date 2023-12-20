import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Proyecto 3';
  ciclo: string = 'DAW';
  nombreUsuario:string = ''

  cambiarNombre() {
    this.ciclo = "Desarrollo de aplicaciones web";
  }

  retornarNombre() {
    this.ciclo = "DAW";
  }

  cargarNombreUsuario(nombre:string) {
    this.nombreUsuario = nombre.toUpperCase();
  }
}
