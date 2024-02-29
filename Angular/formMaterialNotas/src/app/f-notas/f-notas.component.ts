import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Alumno } from '../alumno';

@Component({
  selector: 'app-f-notas',
  templateUrl: './f-notas.component.html',
  styleUrls: ['./f-notas.component.css']
})
export class FNotasComponent implements OnInit {
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
    this.dataSource.data.push(this.miform.value);
    this.dataSource._updateChangeSubscription();
    this.miform.reset();
  }else{
  alert('Notas no enviadas');
  }

}

miform!: FormGroup;

}
