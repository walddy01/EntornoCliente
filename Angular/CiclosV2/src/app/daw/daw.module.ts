import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DawRoutingModule } from './daw-routing.module';
import { DespliegueComponent } from './despliegue/despliegue.component';
import { DiwComponent } from './diw/diw.component';
import { DwecComponent } from './dwec/dwec.component';
import { DwesComponent } from './dwes/dwes.component';


@NgModule({
  declarations: [
    DespliegueComponent,
    DiwComponent,
    DwecComponent,
    DwesComponent
  ],
  imports: [
    CommonModule,
    DawRoutingModule
  ]
})
export class DawModule { }
