import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {

  resultadoSuma!: number;
  resultadoResta!: number;
  resultadoProducto!: number;
  ResultadoDivision!: number;

  recibir(event: any) {
    this.num1 = event.num1A;
  }

  recibir2(event: any) {
    this.num2 = event.num2A;
    console.log(this.num1, this.num2);
    this.generar();
  }

generar() {
  this.resultadoSuma = this.num1 + this.num2;
  this.resultadoResta = this.num1 - this.num2;
  this.resultadoProducto = this.num1 * this.num2;
  this.ResultadoDivision = this.num1 / this.num2;
}

  num1: number = 0;
  num2: number = 0;

}
