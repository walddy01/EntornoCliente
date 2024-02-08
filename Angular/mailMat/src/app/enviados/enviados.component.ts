import { Component, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Correo } from '../correo';
import { ServicioMailService } from '../servicio-mail.service';

@Component({
  selector: 'app-enviados',
  templateUrl: './enviados.component.html',
  styleUrls: ['./enviados.component.css']
})
export class EnviadosComponent {




  constructor (private http : ServicioMailService) {
    this.mostrarMensajes();
  }

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  dataSource = new MatTableDataSource<Correo>();
  displayedColumns: string[] = ['id', 'origen', 'destinatario', 'mensaje', 'asunto', 'fecha', 'leido'];

  correo : Correo = {
    id: 0,
    origen: 'camacho',
    destinatario: '',
    mensaje: '',
    asunto: '',
    fecha: '',
    leido: 0
  }
  mostrarMensajes() {
    this.http.mensajesEnviados(this.correo.origen).subscribe( x => {
      this.dataSource.data = x;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
  ngAfterViewInit() {
    this.mostrarMensajes();
  }

  applyFilter(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
