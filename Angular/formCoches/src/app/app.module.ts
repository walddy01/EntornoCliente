import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormCComponent } from './form-c/form-c.component';
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
    AppComponent,
    FormCComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
