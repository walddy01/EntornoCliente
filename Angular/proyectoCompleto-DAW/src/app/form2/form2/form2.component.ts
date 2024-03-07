import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Alumno } from 'src/app/alumno';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component  implements OnInit{
  dataSource= new MatTableDataSource<Alumno>();
  columnas: string[]=['cif','nombre','n1','n2','n3'];

  constructor(private fb:FormBuilder){}
    ngOnInit(): void {
      this.miform=this.fb.group({
        cif: ['',[Validators.required,Validators.pattern(/^\d{8}[A-Z]$/)]],
        nombre: ['',[Validators.required,Validators.minLength(10),Validators.maxLength(50)]],
        n1: ['',[Validators.required,Validators.pattern(/^(10|[0-9])$/)]],
        n2: ['',[Validators.required,Validators.pattern(/^(10|[0-9])$/)]],
        n3: ['',[Validators.required,Validators.pattern(/^(10|[0-9])$/)]],
      });
    }

  EnviarNotas() {
    if(this.miform.valid){
      alert('Notas Enviadas');
      // console.log(this.miform.value);

    }else{
    alert('Notas no enviadas');
    }

  }

  miform!: FormGroup;

}
