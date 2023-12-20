import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular P8';
  imagenes = ['https://randomuser.me/api/portraits/women/40.jpg', 'https://randomuser.me/api/portraits/women/41.jpg', 'https://randomuser.me/api/portraits/women/42.jpg', 'https://randomuser.me/api/portraits/women/43.jpg', 'https://randomuser.me/api/portraits/women/44.jpg', 'https://randomuser.me/api/portraits/men/40.jpg', 'https://randomuser.me/api/portraits/men/41.jpg', 'https://randomuser.me/api/portraits/men/42.jpg', 'https://randomuser.me/api/portraits/men/43.jpg', 'https://randomuser.me/api/portraits/men/44.jpg',];

  indiceImagenesSeleccionada: number = 0;
  imagen: string = '';
  ancho: number = 0;
  auto: boolean = false;

  temp:NodeJS.Timeout | undefined;

  constructor() {
    this.indiceImagenesSeleccionada = 0;
    this.ancho = 300;
    this.auto = false;
    this.imagen = this.imagenes[this.indiceImagenesSeleccionada];
  }

  anterior() {

    this.indiceImagenesSeleccionada--;
    if (this.indiceImagenesSeleccionada == -1) {
      this.indiceImagenesSeleccionada = this.imagenes.length - 1;
    }
    this.imagen = this.imagenes[this.indiceImagenesSeleccionada];
  }

  siguiente() {
    this.indiceImagenesSeleccionada++;
    if (this.indiceImagenesSeleccionada == this.imagenes.length) {
      this.indiceImagenesSeleccionada = 0;
    }
    this.imagen = this.imagenes[this.indiceImagenesSeleccionada];
  }

  disminuir() {
    this.ancho -= 10;
  }

  aumentar() {
    this.ancho += 10;
  }

  play() {
    if(!this.auto){
      this.auto = true;
      console.log(this.auto);
    } else{
      this.auto = false;
      console.log(this.auto);
    }

    if(this.auto){
      this.temp = setInterval(()=>{
        this.siguiente();
      },1000)
    }else{
      clearInterval(this.temp);
    }
  }
}
