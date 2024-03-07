import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Out2RoutingModule } from './out2-routing.module';
import { InOut2Component } from './in-out2/in-out2.component';


@NgModule({
  declarations: [
    InOut2Component
  ],
  imports: [
    CommonModule,
    Out2RoutingModule
  ]
})
export class Out2Module { }
