import { Component, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-frutal',
  templateUrl: './frutal.component.html',
  styleUrls: ['./frutal.component.css']
})
export class FrutalComponent {
  @Input()
  mensajeDeEntradaFrutal: string = ""
  mensajeDeEntradaFrutal: string = "";

  @Output()
  mensajeDeSalidaFrutal = new EventEmitter();

  @Output()
  nplantones = new EventEmitter();
  numerodePlantones: number = 0;

  mensajeParaHuerto: string = "";

  enviaMensaje() {
    this.mensajeDeSalidaFrutal.emit(this.mensajeParaHuerto);
  }

  enviarPlantones() {
    this.numerodePlantones = Math.round(Math.random() * 1000);
    this.nplantones.emit(this.numerodePlantones);
  }
}
