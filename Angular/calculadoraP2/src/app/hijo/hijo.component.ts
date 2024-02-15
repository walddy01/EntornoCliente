import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit{
  ngOnInit(): void {
    this.devolverNum1.emit({num1A:Math.round(Math.random()*100)});
    this.devolverNum2.emit({num2A:Math.round(Math.random()*100)});

  }

  @Input() numa1!: number;
  @Input() numa2!: number;

  @Output() devolverNum1 = new EventEmitter();
  @Output() devolverNum2 = new EventEmitter();



}
