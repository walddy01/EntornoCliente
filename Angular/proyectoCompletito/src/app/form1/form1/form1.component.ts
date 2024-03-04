import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Parador } from 'src/app/parador';
import { ServicioHotelService } from 'src/app/servicio-hotel.service';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {

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
