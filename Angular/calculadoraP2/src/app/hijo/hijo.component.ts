import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {

  @Output() devolverNum1 = new EventEmitter();
  @Output() devolverNum2 = new EventEmitter();

  num1: number = 0;
  num2: number = 0;
  generar() {
    this.devolverNum1.emit({num1A:this.num1});
    this.devolverNum2.emit({num2A:this.num2});
  }
}
