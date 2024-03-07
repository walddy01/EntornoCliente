import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form4',
  templateUrl: './form4.component.html',
  styleUrls: ['./form4.component.css']
})
export class Form4Component {
// nombre!: string;
// apellidos!: string;
// fechaN!: Date;
// tarjetaC!: string;
// pwd!: string;

constructor(private fb:FormBuilder){}

ngOnInit(): void {
  this.miformulario=this.fb.group({
    nombre: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(20)]],
    apellidos: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(20)]],
    fechaN: ['',Validators.required],
    tarjetaC: ['',[Validators.required,Validators.pattern('^[0-9]{25}$')]],
    pwd: ['', [Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\w]).{10,}$')]]
  })
}
miformulario!: FormGroup;
get nombre(){
  return this.miformulario.get('nombre');
}
get apellidos(){
  return this.miformulario.get('apellidos');
}
get fechaN(){
  return this.miformulario.get('fechaN');
}
get tarjetaC(){
  return this.miformulario.get('tarjetaC');
}
get pwd(){
  return this.miformulario.get('pwd');
}
EnviarDatos() {
if(this.miformulario.valid){
  alert('Todo Correcto');
}
}

}
