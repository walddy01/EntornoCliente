import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Form1Component } from './form1/form1.component';

import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { HttpClientModule } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatNativeDateModule} from '@angular/material/core';
import {MAT_DATE_LOCALE} from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    Form1Component
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class Form1Module { }
