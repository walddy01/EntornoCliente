import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Empleado } from 'src/app/empleado';
import { ServicioEmpleadoService } from 'src/app/servicio-empleado.service';

@Component({
  selector: 'app-react1',
  templateUrl: './react1.component.html',
  styleUrls: ['./react1.component.css']
})
export class React1Component implements OnInit{
  empleado!: Empleado;
  enviar() {
    this.empleado = this.miFormulario.value;
    console.log(this.empleado);

    this.servicio.enviarEmpleado(this.empleado).subscribe(x => {
      console.log(x);
    });
  }
  reset() {
    this.miFormulario.reset();
  }

  miFormulario!: FormGroup;
  empleados: Empleado[] = [];
  ids: number[] = [];
  imagen!: string;

  generarId() {
    for (let i = 0; i < 300; i++) {
      this.ids[i] = i + 1;
    }
  }

  constructor(private servicio: ServicioEmpleadoService ,private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.generarId();
    this.cargarEmpleados();

    this.miFormulario = this.fb.group({
      'id' : ['', [Validators.required]],
      'nombre' : ['', [Validators.required]],
      'direccion' : ['', [Validators.required]],
      'cargo' : ['', [Validators.required]],
      'edad' : ['', [Validators.required]],
      'imagen' : ['', [Validators.required]]
    })

  }

  cargarEmpleados () {
    this.servicio.obtenerEmpleados().subscribe( x => {
      this.empleados = x;
      console.log(this.empleados);
    });
  }



}
