import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 4';
  numero1:number = 0;
  numero2:number = 0;
  resultado:number = 0;

  sumar(){
    this.resultado=this.numero1+this.numero2;
    return this.resultado;
  }

  restar(){
    this.resultado=this.numero1-this.numero2;
    return this.resultado;
  }

  dividir(){
    this.resultado = parseFloat((this.numero1/this.numero2).toFixed(3));
    return this.resultado;
  }

  multiplicar(){
    this.resultado = this.numero1*this.numero2;
    return this.resultado;
  }
}
