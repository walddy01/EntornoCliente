import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Parador } from 'src/app/parador';
import { FormularioServiciService } from 'src/app/servicio-parador.service';


@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component {
  constructor(private servicio:FormularioServiciService, private fb:FormBuilder){
  }

  paradores: Parador[] = [];

  miform!: FormGroup;

  cargarParadores(){
    this.servicio.obtenerParador().subscribe((x)=> {this.paradores=x;
      console.log(this.paradores);
    });
  }

  ngOnInit(): void {
    this.cargarParadores()
    this.miform = this.fb.group({
      nombre: ['',[Validators.required]],
      parador: ['',[Validators.required]],
      fechaE: ['',[Validators.required]],
      fechaS: ['',[Validators.required]]
    },{
      validator : [this.fechaMayorS, this.fechaMayorE]

    })
  }




  enviar(){
    alert("Formulario enviado");
  }


 fechaMayorE(f : FormGroup) {
  const fechaSeleccionada = f.get('fechaE')?.value;
  const fechaActual = new Date();

  if (fechaSeleccionada <= fechaActual) {
    f.get('fechaE')?.setErrors({"fechaNoValida" : true})
  }else {
    f.get('fechaE')?.setErrors(null)
  }
}

fechaMayorS(f : FormGroup) {
  const fechaSeleccionada = f.get('fechaS')?.value;
  const fechaActual = f.get('fechaE')?.value;

  if (fechaSeleccionada <= fechaActual) {
    f.get('fechaS')?.setErrors({"fechaNoValida" : true})
  }else {
    f.get('fechaS')?.setErrors(null)
  }
}
}
