import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DamComponent } from './dam/dam.component';
import { DawComponent } from './daw/daw.component';
import { AsirComponent } from './asir/asir.component';

const routes: Routes = [
  {
    path: 'dam',
    component: DamComponent
  },
  {
    path: 'daw',
    component: DawComponent
  },
  {
    path: 'asir',
    component: AsirComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
