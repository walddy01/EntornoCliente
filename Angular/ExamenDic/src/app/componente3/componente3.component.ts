import { Component } from '@angular/core';

@Component({
  selector: 'app-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.css']
})
export class Componente3Component {
  base:string = "https://randomuser.me/api/portraits/women/";
  url:string = "";
  Nrandom:number = 0;

  imagen(){
    this.Nrandom = Math.floor(Math.random() * 40);
    this.url = this.base + this.Nrandom + ".jpg";
  }
}
