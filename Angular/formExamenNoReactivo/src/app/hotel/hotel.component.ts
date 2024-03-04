import { Component, OnInit } from '@angular/core';
import { Parador } from '../parador';
import { ServicioHotelService } from '../servicio-hotel.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  constructor(private servicio: ServicioHotelService) {}

  nombreCliente!: String;
  paradorSeleccionado: string = "";
  paradores: Parador[] = [];

  fecha1!: Date;
  fecha2!: Date;

  reset() {
    this.nombreCliente = "";
    this.paradorSeleccionado = "";
    this.fecha1 = new Date();
    this.fecha2 = new Date();
  }

  reservar() {
    var error: boolean = false;

    if (this.nombreCliente == "") {
      alert("Debe escribir el nombre del cliente");
      error = true;
    }

    if (this.paradorSeleccionado == "") {
      alert("Debe seleccionar un parador");
      error = true;
    }

    if (this.fecha1 <= new Date()) {
      alert("La fecha de entrada no puede ser menor o igual a la fecha actual");
      error = true;
    }

    if (this.fecha2 <= this.fecha1) {
      alert("La fecha de salida no puede ser menor o igual a la fecha de entrada");
      error = true;
    }

    if (error == false) {
      var dias = (this.fecha2.getTime() - this.fecha1.getTime()) / (1000 * 60 * 60 * 24);
      alert("Reserva realizada con exito en el pasador" + this.paradorSeleccionado + " para el cliente " + this.nombreCliente + " durante " + dias + " dias");
    }
  }
  ngOnInit(): void {
    this.paradorSeleccionado = "";
    this.fecha1 = new Date();
    this.fecha2 = new Date();
    this.servicio.obtenerParadores().subscribe( x => {
      this.paradores = x;
      console.log(this.paradores);
    });
    console.log('ngOnInit');
  }
}
