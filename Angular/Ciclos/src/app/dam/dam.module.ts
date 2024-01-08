import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DamRoutingModule } from './dam-routing.module';
import { BdComponent } from './bd/bd.component';
import { DiComponent } from './di/di.component';
import { PmmsComponent } from './pmms/pmms.component';
import { PspComponent } from './psp/psp.component';


@NgModule({
  declarations: [
    BdComponent,
    DiComponent,
    PmmsComponent,
    PspComponent
  ],
  imports: [
    CommonModule,
    DamRoutingModule
  ]
})
export class DamModule { }
