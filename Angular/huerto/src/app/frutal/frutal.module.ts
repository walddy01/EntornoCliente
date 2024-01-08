import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrutalRoutingModule } from './frutal-routing.module';
import { MelocotonComponent } from './melocoton/melocoton.component';
import { PapayaComponent } from './papaya/papaya.component';
import { KiwiComponent } from './kiwi/kiwi.component';


@NgModule({
  declarations: [
    MelocotonComponent,
    PapayaComponent,
    KiwiComponent
  ],
  imports: [
    CommonModule,
    FrutalRoutingModule
  ]
})
export class FrutalModule { }
