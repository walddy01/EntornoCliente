import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TablaPComponent } from './tabla-p/tabla-p.component';
import { CuadroDialogoInsComponent } from './cuadro-dialogo-ins/cuadro-dialogo-ins.component';
import { CuadroDialogElimComponent } from './cuadro-dialog-elim/cuadro-dialog-elim.component';
import { MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule} from '@angular/material/sort';
@NgModule({
  declarations: [
    AppComponent,
    TablaPComponent,
    CuadroDialogoInsComponent,
    CuadroDialogElimComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,FormsModule,
    MatInputModule,MatFormFieldModule,
    MatPaginatorModule,MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
