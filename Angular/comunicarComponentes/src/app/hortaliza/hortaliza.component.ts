import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hortaliza',
  templateUrl: './hortaliza.component.html',
  styleUrls: ['./hortaliza.component.css']
})
export class HortalizaComponent {
@Input()
  mensajeDeEntradaHortaliza: string = "";

@Output()
  mensajeDeSalidaHortaliza = new EventEmitter();

mensajeParaHuerto: string = "";
}
