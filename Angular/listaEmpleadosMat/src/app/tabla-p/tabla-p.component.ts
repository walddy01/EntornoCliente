import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CdkTableDataSourceInput } from '@angular/cdk/table';


@Component({
  selector: 'app-tabla-p',
  templateUrl: './tabla-p.component.html',
  styleUrls: ['./tabla-p.component.css']
})
export class TablaPComponent {
displayedColumns: any;

@ViewChild(MatPaginator) paginator: MatPaginator | undefined;
dataSource: CdkTableDataSourceInput<any> | undefined;

}
