import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { React2RoutingModule } from './react2-routing.module';
import { React2Component } from './react2/react2.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    React2Component
  ],
  imports: [
    CommonModule,
    React2RoutingModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule
  ]
})
export class React2Module { }
