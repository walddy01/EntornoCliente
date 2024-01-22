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

}
