import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsirComponent } from './asir/asir.component';
import { DamComponent } from './dam/dam.component';
import { DawComponent } from './daw/daw.component';

const routes: Routes = [
  {
    path: 'dam',
    component: DamComponent,
    loadChildren: () => import('./dam/dam.module').then(m => m.DamModule)
  },
  {
    path: 'daw',
    component: DawComponent,
    loadChildren: () => import('./daw/daw.module').then(m => m.DawModule)
  },
  {
    path: 'asir',
    component: AsirComponent,
    loadChildren: () => import('./asir/asir.module').then(m => m.AsirModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
