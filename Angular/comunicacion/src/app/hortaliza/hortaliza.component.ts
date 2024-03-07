import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hortaliza',
  templateUrl: './hortaliza.component.html',
  styleUrls: ['./hortaliza.component.css']
})
export class HortalizaComponent {
  @Input()
  mensajeDeEntradaHortaliza:string= '';

  @Output()
  mensajeDeSalidaHortaliza= new EventEmitter();

  mensajeParaHuerto :string= '';
  @Output()
  nsemilleros=new EventEmitter();
  numerosemilleros:number=0;
  constructor() { }

  ngOnInit(): void {
  }

  enviaMensaje() {
    this.mensajeDeSalidaHortaliza.emit({mensaje: this.mensajeParaHuerto});
  }
  enviarSemilleros(){
    this.numerosemilleros=Math.round(Math.random()*100);
    this.nsemilleros.emit({semilleros:this.numerosemilleros})
  }

}
