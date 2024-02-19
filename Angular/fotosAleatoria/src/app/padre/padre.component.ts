import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {

  srcBase: string = "https://randomuser.me/api/portraits/";

  srcMan: string = "";
  srcWoman: string = "";
recibirNum1(event: any) {
  this.srcMan = this.srcBase + "men/" + event.num1 + ".jpg";
}

recibirNum2(event: any) {
  this.srcWoman = this.srcBase + "women/" + event.num2 + ".jpg";
}
}
