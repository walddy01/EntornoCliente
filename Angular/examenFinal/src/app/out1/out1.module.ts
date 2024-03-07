import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Out1RoutingModule } from './out1-routing.module';
import { InOut1Component } from './in-out1/in-out1.component';


@NgModule({
  declarations: [
    InOut1Component
  ],
  imports: [
    CommonModule,
    Out1RoutingModule
  ]
})
export class Out1Module { }
