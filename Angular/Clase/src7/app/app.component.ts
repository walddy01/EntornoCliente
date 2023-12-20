import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reloj';
  numero:number = 0;

  hora:string = "";
  minuto:string = "";
  segundo:string = "";
  milisegundo:string = "";

  // tiempo:number = 0;
  temp:NodeJS.Timer | undefined;
  constructor(){
    this.temp=setInterval(()=>{
      this.numero = Math.round(Math.random()*1000);
      // this.tiempo++;
      this.hora = new Date().getHours().toString();
      this.minuto = new Date().getMinutes().toString();
      this.segundo = new Date().getSeconds().toString();
      this.milisegundo = new Date().getMilliseconds().toString();
    },100)

  }

  parar(){
    console.log('parar');
  }
}
