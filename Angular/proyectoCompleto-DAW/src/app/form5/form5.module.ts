import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Form5RoutingModule } from './form5-routing.module';
import {CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from '../app.component';



@NgModule({
  declarations: [
    ],
  imports: [
    CommonModule,
    Form5RoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]


})
export class Form5Module { }
