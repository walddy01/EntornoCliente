import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Coche } from 'src/app/coche';
import { ServicioAutoService } from 'src/app/servicio-auto.service';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit{

  dataSource= new MatTableDataSource<Coche>();

  columnas: String[]=['matricula','motor','climatizador','cargadorElectrico','gps','neumaticos'];
  miform!: FormGroup;



  constructor(private servicio: ServicioAutoService, private fb: FormBuilder){
    this.miform=this.fb.group({
      matricula:['',[Validators.required,Validators.pattern('^[0-9]{4}[A-Z]{3}$')]],
      motor: ['',[Validators.required]],
      climatizador: ['false',[]],
      cargadorElectrico: ['false',[]],
      gps: ['false',[]],
      neumaticos: ['',[Validators.required]]
    })
  }
    ngOnInit(): void {
    this.servicio.obtenerCoche().subscribe((coche:Coche[])=>
    {
      this.dataSource.data=coche;
    })
    }

    EnviarDatos() {

      if(this.miform.valid){
        this.servicio.insertarCoche(this.miform.value).subscribe(()=>{
          alert('Datos Enviados');
          this.dataSource.data.push(this.miform.value);
          this.dataSource._updateChangeSubscription();
          this.miform.reset();
        });
      }else{
        alert('Datos no Enviados');
      }
    }
}
