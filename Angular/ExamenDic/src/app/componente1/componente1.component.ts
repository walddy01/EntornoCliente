import { Component } from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component {

  color:string = "";
  cambiarColorRojo(btn1: HTMLButtonElement, btn2: HTMLButtonElement, btn3: HTMLButtonElement, btn4: HTMLButtonElement) {
    btn1.style.backgroundColor = "red";
    btn2.style.backgroundColor = "red";
    btn3.style.backgroundColor = "red";
    btn4.style.backgroundColor = "red";
  }

  cambiarColorVerde(btn1: HTMLButtonElement, btn2: HTMLButtonElement, btn3: HTMLButtonElement, btn4: HTMLButtonElement) {
    btn1.style.backgroundColor = "green";
    btn2.style.backgroundColor = "green";
    btn3.style.backgroundColor = "green";
    btn4.style.backgroundColor = "green";
  }

  cambiarColorAzul(btn1: HTMLButtonElement, btn2: HTMLButtonElement, btn3: HTMLButtonElement, btn4: HTMLButtonElement) {
    btn1.style.backgroundColor = "blue";
    btn2.style.backgroundColor = "blue";
    btn3.style.backgroundColor = "blue";
    btn4.style.backgroundColor = "blue";
  }

  cambiarColorAmarillo(btn1: HTMLButtonElement, btn2: HTMLButtonElement, btn3: HTMLButtonElement, btn4: HTMLButtonElement) {
    btn1.style.backgroundColor = "yellow";
    btn2.style.backgroundColor = "yellow";
    btn3.style.backgroundColor = "yellow";
    btn4.style.backgroundColor = "yellow";
  }
}
