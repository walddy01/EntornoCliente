import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit{

  @Output() contadorDecimas = new EventEmitter();
  @Output() contadorSegundos = new EventEmitter();
  @Output() contadorMinutos = new EventEmitter();

  decimas: number = 0;
  segundos: number = 0;
  minutos: number = 0;

  ngOnInit(): void {
    setInterval(()=>{
      this.decimas++;
      this.contadorDecimas.emit({decimas: this.decimas});
      if(this.decimas ==  10){
        this.decimas = 0;
        this.segundos ++;
        this.contadorSegundos.emit({segundos: this.segundos});
      }
      if (this.segundos == 59) {
        this.segundos = 0;
        this.minutos ++;
        this.contadorMinutos.emit({minutos: this.minutos});
      }
    }, 100)
  }

}
