import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-p',
  templateUrl: './form-p.component.html',
  styleUrls: ['./form-p.component.css']
})
export class FormPComponent {
  miform!: FormGroup;
  constructor(private fb:FormBuilder){}
  ngOnInit(): void {
    this.miform = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      fecha: ['', [Validators.required]],
      trabajo: ['', [Validators.required]],
      ps: ['', [Validators.required]],
      ps_r: ['', [Validators.required]]
    }, {
      validators: this.passwordMatchValidator.bind(this) // Corrección aquí
    });
  }

  passwordMatchValidator(fr: FormGroup) {
    const ps = fr.get('ps')!.value;
    const ps_r = fr.get('ps_r')!.value;

    console.log(ps, ps_r)
    if (ps !== '' && ps === ps_r) {
      console.log('dpm');
      return null; // Coinciden, no hay error
    } else {
      console.log('no dpm');
      return { passwordMismatch: true }; // No coinciden, devuelve error
    }
  }


}
