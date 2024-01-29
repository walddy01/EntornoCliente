import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponenteVehiculoComponent } from './componente-vehiculo/componente-vehiculo.component';
import { MatTableModule} from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule} from '@angular/material/paginator';
import {HttpClientModule} from '@angular/common/http'
import { MatSortModule } from '@angular/material/sort';
@NgModule({
  declarations: [
    AppComponent,
    ComponenteVehiculoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatTableModule,
    FormsModule,MatPaginatorModule,
    MatFormFieldModule,HttpClientModule,MatInputModule,MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
