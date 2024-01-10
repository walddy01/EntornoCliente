import { Component } from '@angular/core';
import { Fruta } from '../fruta';
import { ServicioFService } from '../servicio-f.service';

@Component({
  selector: 'app-fruta',
  templateUrl: './fruta.component.html',
  styleUrls: ['./fruta.component.css']
})
export class FrutaComponent {


modificar(){}
eliminar(){}

frutas!: Fruta[];
// constructor(private httpCliente:ServicioFService) {
//   this.httpCliente.leerProductos().subscribe((result:Fruta[])=>this.frutas=result)
// }
}
