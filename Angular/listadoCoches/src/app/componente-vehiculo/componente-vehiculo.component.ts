import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Vehiculo } from '../vehiculo';
import { HttpClient } from '@angular/common/http';
import { ServicioDatosService } from '../servicio-datos.service';

@Component({
  selector: 'app-componente-vehiculo',
  templateUrl: './componente-vehiculo.component.html',
  styleUrls: ['./componente-vehiculo.component.css']
})
export class ComponenteVehiculoComponent {
dataSource = new MatTableDataSource<Vehiculo>([]);
displayedColumns: string[] = ['make_and_model', 'color', 'transmission', 'doors', 'fuel_type', 'kilometrage'];

constructor(private httpCliente: ServicioDatosService  ) {
  this.httpCliente.listarVehiculos().subscribe(x=>this.dataSource.data=x);
}

applyFilter($event: KeyboardEvent) {
throw new Error('Method not implemented.');
}

}
