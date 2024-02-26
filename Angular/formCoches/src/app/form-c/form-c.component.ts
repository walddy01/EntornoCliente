import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Coche } from '../coche';
import { ServicioAutoService } from '../servicio-auto.service';

@Component({
  selector: 'app-form-c',
  templateUrl: './form-c.component.html',
  styleUrls: ['./form-c.component.css']
})
export class FormCComponent implements OnInit {
myForm!: FormGroup;



  constructor(private servicio: ServicioAutoService, private fb : FormBuilder) {
    this.myForm = this.fb.group({
      matricula: [''],
      diesel: [''],
      gasolina: [''],
      electrico: [''],
      hibrido: [''],
      climatizador: [''],
      cargadorElectrico: [''],
      gps: [''],
      neumatico: ['']
    })
  }


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.servicio.obtenerCoches().subscribe((coche:Coche[])=>{
      this.dataSource.data=coche;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  dataSource = new MatTableDataSource<Coche>;
  displayedColumns: string[] = ['matricula', 'motor', 'climatizador', 'cargadorElectrico', 'gps', 'neumaticos'];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
