import { Component } from '@angular/core';

@Component({
  selector: 'app-componente4',
  templateUrl: './componente4.component.html',
  styleUrls: ['./componente4.component.css']
})
export class Componente4Component {
numero: string = "";
arrayNum: string[] = [];
mostrar: string = "";

add(valor: HTMLInputElement){
  this.numero = valor.value;
  this.arrayNum.push(this.numero);

  this.mostrar = "";
  for(let i = 0; i < this.arrayNum.length; i++){
    this.mostrar += this.arrayNum[i] + " ";
  }
}




}
