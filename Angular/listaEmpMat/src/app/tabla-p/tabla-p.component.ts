import { Component, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import { Persona } from '../persona';
import { ServicioPersonaService } from '../servicio-persona.service';
@Component({
  selector: 'app-tabla-p',
  templateUrl: './tabla-p.component.html',
  styleUrls: ['./tabla-p.component.css']
})
export class TablaPComponent {
Persona: any;
eliminar(arg0: any) {
throw new Error('Method not implemented.');
}

applyFilter(event: KeyboardEvent) {

}
datos: Persona[] =[];
@ViewChild(MatPaginator, { static: true })
paginator!: MatPaginator;
@ViewChild(MatSort, { static: true })
sort!: MatSort;

datasource=new MatTableDataSource<Persona>();
constructor( private httpCliente: ServicioPersonaService){

 }
columnas: string[] = ['id', 'nombre', 'direccion', 'cargo' , 'edad' , 'imagen','borrar', 'modificar'];
}
