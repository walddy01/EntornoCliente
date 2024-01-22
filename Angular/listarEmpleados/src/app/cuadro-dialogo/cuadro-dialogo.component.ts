import { Component, Inject } from '@angular/core';
import {MatDialog,MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog'
import { Empleado } from '../empleado';

@Component({
  selector: 'app-cuadro-dialogo',
  templateUrl: './cuadro-dialogo.component.html',
  styleUrls: ['./cuadro-dialogo.component.css']
})
export class CuadroDialogoComponent {

  constructor(
  public dialogRef: MatDialogRef<CuadroDialogoComponent>,
  @Inject(MAT_DIALOG_DATA) public data: Empleado){}
  Cancelar(){
  this.dialogRef.close();
  // console.log(this.data);
  }
}
