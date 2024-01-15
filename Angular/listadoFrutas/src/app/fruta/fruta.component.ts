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



  actualizarProducto() {
    this.httpCliente.updateProduct(this.selectedProduct).subscribe((producto:Fruta)=>{this.prod=producto});
  }
  crearProducto() {
    this.httpCliente.createProduct(this.selectedProduct).subscribe((producto:Fruta)=>{this.prod=producto});
  }
  selectedProduct: Fruta = {
    id: '',
    nombre: '',
    precio: 0,
    unidades: 0,
    imagen: ''
  };

  seleccionar(f : Fruta){
    this.selectedProduct = f;
  }
  eliminar(id : string) {
    this.httpCliente.deleteProduct(id).subscribe((producto:Fruta)=>{this.prod=producto});
  }
  modificar() {
  }
  frutas!: Fruta[];
  prod!: Fruta;


  constructor(private httpCliente: ServicioFService) {
    this.httpCliente.leerProductos().subscribe(x => this.frutas = x);
  }


}
