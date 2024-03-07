import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hortaliza',
  templateUrl: './hortaliza.component.html',
  styleUrls: ['./hortaliza.component.css']
})
export class HortalizaComponent {
mensajePadre: string="";
@Output() mensajeDeHortaliza = new EventEmitter<string>();

enviarFP() {
}
@Input() mensajeParaHortaliza:string=""
}
