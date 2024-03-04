import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Parador } from '../parador';
import { ServicioHotelService } from '../servicio-hotel.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  constructor(private servicio: ServicioHotelService, private fb : FormBuilder) {
    this.miformulario = this.fb.group({
      'nombre' : ['', [Validators.required]],
      'parador' : ['', [Validators.required]],
      'fecha1' : ['', [Validators.required]],
      'fecha2' : ['', [Validators.required]]
    })
  }

  miformulario!: FormGroup;
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
    var dias = (this.fecha2.getTime() - this.fecha1.getTime()) / (1000 * 60 * 60 * 24);
    alert("Reserva realizada con exito en el pasador" + this.paradorSeleccionado + " para el cliente " + this.nombreCliente + " durante " + dias + " dias");
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
