import { Component, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ServicioDatosService } from '../servicio-datos.service';
import { Vehiculo } from '../vehiculo';
import {MatSort} from '@angular/material/sort';
@Component({
  selector: 'app-componente-vehiculo',
  templateUrl: './componente-vehiculo.component.html',
  styleUrls: ['./componente-vehiculo.component.css']
})
export class ComponenteVehiculoComponent {
//construir el objeto dataSource
  dataSource= new  MatTableDataSource<Vehiculo>();
  //¿¿¿¿añadir los viewChild

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;
  //nombre de columnas de la cabecera
  //¿¿¿¿estaba en mayúscula make_and_model
  displayedColumns: string[]=['make_and_model','color','transmission','fuel_type','doors','kilometrage'];
  //vehiculo!: Vehiculo[];
  //llamar al servicio y cargar en el array vehículo lista de la api
  //a continuación se lo inyectamos al objeto dataSource
constructor(private httpCliente:ServicioDatosService){
  //llamar al método listarVehiculos del sevicio
  this.httpCliente.listarVehiculos().subscribe(x=>{
        //listacompleta que inyecta datos al atributo datasource de tabla
         this.dataSource.data=x
        //filtro de paginación
         this.dataSource.paginator = this.paginator;
         //filtro para ordenación
          this.dataSource.sort = this.sort;
        });
}

//¿¿¿¿quitar el dolar de event
applyFilter(event: KeyboardEvent) {
  const filtro = (event.target as HTMLInputElement).value;
this.dataSource.filter = filtro.trim().toLowerCase();
}

}
