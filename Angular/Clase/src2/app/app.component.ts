import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Temporizador';
  numero:number = 0;

  hora:string = "";
  minuto:string = "";
  segundo:string = "";

  tiempo:number = 0;
  temp:NodeJS.Timer | undefined;
  constructor(){
    this.temp=setInterval(()=>{
      this.numero = Math.round(Math.random()*1000);
      this.tiempo++;
      this.hora = new Date().getHours().toString();
      this.minuto = new Date().getMinutes().toString();
      this.segundo = new Date().getSeconds().toString();
    },100)

  }

}
