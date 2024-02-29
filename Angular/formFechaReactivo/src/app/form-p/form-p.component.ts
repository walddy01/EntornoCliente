import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-p',
  templateUrl: './form-p.component.html',
  styleUrls: ['./form-p.component.css']
})
export class FormPComponent implements OnInit{
miform!: FormGroup;
constructor(private fb:FormBuilder){}
  ngOnInit(): void {
    this.miform=this.fb.group({
      email:['',[Validators.required,Validators.email]],
      fecha:['',[Validators.required]],
      trabajo:['',[Validators.required]],
      ps:['', [Validators.required, Validators.pattern('^[A-Z].{8}[0-9]$')]],
      ps_r:['',[Validators.required]]

    }, {
      validators: this.passwordMatchValidator
    })
  }
  passwordMatchValidator(fr: FormGroup){

    const ps = fr.get('ps')!.value;
    console.log(ps);
    console.log("PASSWORD 1");

    const ps_r = fr.get('ps_r')!.value;
    console.log(ps_r);
    console.log("PASSWORD 2");

    if (ps!=="") {
      if (ps!==ps_r) {
        fr.get('ps_r')?.setErrors({ mismatch: true });
      }else{
        fr.get('ps_r')?.setErrors(null);
      }
    }
  }

}
