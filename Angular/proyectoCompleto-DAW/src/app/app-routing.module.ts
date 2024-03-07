import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Form1Component } from './form1/form1/form1.component';
import { Form2Component } from './form2/form2/form2.component';
import { Form3Component } from './form3/form3/form3.component';
import { Form4Component } from './form4/form4/form4.component';
import { Form5Component } from './form5/form5/form5.component';
import { Input1Component } from './input1/input1.component';

const routes: Routes = [
  {
    path:'form1',
    component:Form1Component,
    loadChildren: ()=>import ('./form1/form1.module').then(m=>m.Form1Module)
  },
  {
    path:'form2',
    component:Form2Component,
    loadChildren: ()=>import ('./form2/form2.module').then(m=>m.Form2Module)
  },
  {
    path:'form3',
    component:Form3Component,
    loadChildren: ()=>import ('./form3/form3.module').then(m=>m.Form3Module)
  },
  {
    path:'form4',
    component:Form4Component,
    loadChildren: ()=>import ('./form4/form4.module').then(m=>m.Form4Module)
  },
  {
    path:'form5',
    component:Form5Component,
    loadChildren: ()=>import ('./form5/form5.module').then(m=>m.Form5Module)
  },
  {
    path:'input1',
    component:Input1Component,
    loadChildren: ()=>import ('./input1/input1.module').then(m=>m.Input1Module)
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
