import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BdComponent } from './bd/bd.component';
import { DiComponent } from './di/di.component';
import { PmmsComponent } from './pmms/pmms.component';
import { PspComponent } from './psp/psp.component';

const routes: Routes = [
  {
    path: 'bd',
    component: BdComponent
  },
  {
    path: 'di',
    component: DiComponent
  },
  {
    path: 'pmms',
    component: PmmsComponent
  },
  {
    path: 'psp',
    component: PspComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DamRoutingModule { }
