import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { React1RoutingModule } from './react1-routing.module';
import { React1Component } from './react1/react1.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatNativeDateModule} from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';





@NgModule({
  declarations: [
    React1Component
  ],
  imports: [
    CommonModule,
    React1RoutingModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule

  ]
})
export class React1Module { }
