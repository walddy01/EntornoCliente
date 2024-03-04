import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Form2Component } from './form2/form2.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule} from '@angular/material/select';
import{MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import{ MatDividerModule} from '@angular/material/divider';
import { HttpClientModule } from '@angular/common/http';
import{MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [
    Form2Component
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatDividerModule,
    HttpClientModule,
    MatInputModule
  ]
})
export class Form2Module { }
