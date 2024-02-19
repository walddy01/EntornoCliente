import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {
  num1: number =  0;
  num2: number = 0;

  @Output() devolverNum1 = new EventEmitter();
  @Output() devolverNum2 = new EventEmitter();

  generar() {
    this.num1 = Math.round(Math.random() * 100);
    this.num2 = Math.round(Math.random() * 100);

    this.devolverNum1.emit({num1 : this.num1});
    this.devolverNum2.emit({num2 : this.num2});

  console.log(this.num1, this.num2);


  }

}
