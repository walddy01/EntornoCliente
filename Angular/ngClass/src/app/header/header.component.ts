import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
enviarclase() {
  this.clasePrincipal.emit({ ordenHijo:this.claseNueva})
  }
  @Input() infocabecera:string="";
  @Output() clasePrincipal=new EventEmitter();
  claseNueva:string="";

}
