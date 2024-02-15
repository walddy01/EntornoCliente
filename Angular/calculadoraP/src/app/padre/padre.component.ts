import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {

  constructor() {
    this.num1 = Math.floor(Math.random() * 100);
    this.num2 = Math.floor(Math.random() * 100);
  }
  num1: number = 0;
  num2: number = 0;

  generar() {
    window.location.reload();
  }

  resultadoSuma: number = 0;
  sumar(event: any) {
    this.resultadoSuma = event.resultSuma;
  }

  resultadoResta: number = 0;
  restar(event: any) {
    this.resultadoResta = event.resultResta;
  }

  resultadoProducto: number = 0;
  multiplicar(event: any) {
    this.resultadoProducto = event.resultProducto;
  }

  resultadoDivision: number = 0;
  dividir(event: any) {
    this.resultadoDivision = event.resultDivision;
  }

}
