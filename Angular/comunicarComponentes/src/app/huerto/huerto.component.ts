import { Component, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-huerto',
  templateUrl: './huerto.component.html',
  styleUrls: ['./huerto.component.css']
})
export class HuertoComponent {
@Input()
 mensajeDeEntradaHuertoF = "";

mensajeParaHortaliza: string = "";
mensajeParaFrutal: string = "";

}
