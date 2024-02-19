import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {

  decimas: number = 0;
  segundos: number = 0;
  minutos: number = 0;

recibirMinutos(event: any) {
  this.minutos = event.minutos;
}
recibirSegundos(event: any) {
  this.segundos = event.segundos;
}
recibirDecimas(event: any) {
  this.decimas = event.decimas;
}

}
