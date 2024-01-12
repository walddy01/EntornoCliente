import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Fruta } from '../fruta';
import { ServicioFService } from '../servicio-f.service';

@Component({
  selector: 'app-fruta',
  templateUrl: './fruta.component.html',
  styleUrls: ['./fruta.component.css']
})
export class FrutaComponent {
crearProducto(_t59: NgForm) {
throw new Error('Method not implemented.');
}
selectedProduct: any = {};
eliminar() {
}
modificar() {
}
  frutas!: Fruta[];


  constructor(private httpCliente: ServicioFService) {
    this.httpCliente.leerProductos().subscribe(x => this.frutas = x);
  }


}
