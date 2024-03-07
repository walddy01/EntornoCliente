import { Component } from '@angular/core';

@Component({
  selector: 'app-huerto',
  templateUrl: './huerto.component.html',
  styleUrls: ['./huerto.component.css']
})
export class HuertoComponent {


  mensajeParaHortaliza:string = '';
  mensajeDeHortaliza:string = '';
  mensajeParaFrutal:string = '';
  mensajeDeFrutal:string = '';
  peticionesSemilla:number=0;
  peticionesPlantones:number=0;
  constructor() { }

  ngOnInit(): void {
  }

  actualizaMensajeDeHortaliza(event: any) {
    this.mensajeDeHortaliza = event.mensaje;
  }
  actualizaMensajeDeFrutal(event: any) {
    this.mensajeDeFrutal = event.mensaje;
  }
  actualizarNumeroPlantones(event: any) {
     this.peticionesPlantones=event.plantones;
  }
  actualizarNumeroSemilleros(event: any) {
      this.peticionesSemilla=event.semilleros;
  }
}
