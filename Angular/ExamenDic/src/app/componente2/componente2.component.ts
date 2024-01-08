import { Component } from '@angular/core';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component {
  segundos:number = 0;
  segundosS:string = "Segundos";
  select:boolean = false;
  temp:NodeJS.Timeout | undefined;

  iniciar(btn: HTMLButtonElement){
    btn.disabled = true;
    this.temp=setInterval(()=>{
      this.segundos++;
      this.segundosS = this.segundos.toString();
    },1000)
  }

  reanudar(btn: HTMLButtonElement){
    btn.disabled = true;
    btn.style.backgroundColor = "green";
    this.temp=setInterval(()=>{
      this.segundos++;
      this.segundosS = this.segundos.toString();
    },1000)
  }

  parar(btn: HTMLButtonElement){
    btn.disabled = true;
    btn.style.backgroundColor = "green";
    clearInterval(this.temp);
  }

}
