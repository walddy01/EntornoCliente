import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{

constructor(private fb: FormBuilder){}

ngOnInit(): void {
  this.miFormulario = this.fb.group({
    nombre: ['',[Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z]*')]],
    apellido: ['',[Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z]*')]],
    fecha: ['',[Validators.required]],
    tarjeta: ['',[Validators.required, Validators.minLength(20), Validators.maxLength(20), Validators.pattern('[0-9]*')]],
    pwd: ['',[Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$')]]
  })
}

miFormulario!: FormGroup ;

enviarDatos() {

}

}
