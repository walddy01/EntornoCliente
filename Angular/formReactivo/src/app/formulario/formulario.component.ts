import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{
enviar() {
  alert('Todo correcto 👍');
}

  formulario1!: FormGroup;

  constructor(private fb: FormBuilder) {

  }
  ngOnInit(): void {
    this.formulario1 = this.fb.group({
      name: ['',[Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z]*')]],
      firstname: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('[a-zA-Z]*')]],
      email: ['',[Validators.required, Validators.email]],
      // password: ['',[Validators.required, Validators.minLength(8), Validators.pattern('/^(?=.*[a-z])(?=.*\d)/i')]]
    })
  }
}
