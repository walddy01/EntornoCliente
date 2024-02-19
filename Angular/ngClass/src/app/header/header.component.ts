import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
claseNueva: string = "";
@Input() infoHeader: string = "";
recibirClase($event: KeyboardEvent) {

}

}
