import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormPComponent } from './form-p/form-p.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MAT_DATE_LOCALE} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { MatDividerModule } from "@angular/material/divider";

@NgModule({
  declarations: [
    AppComponent,
    FormPComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatDividerModule
  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'es-ES'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
