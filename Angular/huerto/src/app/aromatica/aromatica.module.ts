import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AromaticaRoutingModule } from './aromatica-routing.module';
import { HierbabuenaComponent } from './hierbabuena/hierbabuena.component';
import { PerejilComponent } from './perejil/perejil.component';
import { TomilloComponent } from './tomillo/tomillo.component';


@NgModule({
  declarations: [
    HierbabuenaComponent,
    PerejilComponent,
    TomilloComponent
  ],
  imports: [
    CommonModule,
    AromaticaRoutingModule
  ]
})
export class AromaticaModule { }
