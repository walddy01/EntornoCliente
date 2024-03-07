import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-temporizador',
  templateUrl: './temporizador.component.html',
  styleUrls: ['./temporizador.component.css']
})
export class TemporizadorComponent implements OnInit {
  segundos:number=0;
  minutos:number=0;
  horas:number=0;
  @Input() decimas:number=0;
@Output() contadorDecimas=new EventEmitter();
@Output() contadorSegundos=new EventEmitter();
@Output() contadorMinutos=new EventEmitter();
@Output() contadorHoras=new EventEmitter();
ngOnInit(): void {
  this.segundos=this.decimas;
  this.minutos=this.decimas;
  this.decimas=this.decimas;
  this.horas=this.decimas;
 setInterval(()=>{
    this.decimas++;
    this.contadorDecimas.emit({xxx:this.decimas})
    if (this.decimas==10){
      this.decimas=0;
      this.segundos++;
      console.log("segundos"+this.segundos)
      this.contadorSegundos.emit({yyy:this.segundos})
    }
    if (this.segundos==59){
      this.minutos++;
      this.segundos=0;
      this.contadorSegundos.emit({zzz:this.minutos})
    }
    if (this.minutos==59){
      this.horas++;
      this.minutos=0;
      this.contadorHoras.emit({hhh:this.horas})

    }

 },100)
}

}
