import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InOut1Component } from './out1/in-out1/in-out1.component';
import { InOut2Component } from './out2/in-out2/in-out2.component';
import { React1Component } from './react1/react1/react1.component';
import { React2Component } from './react2/react2/react2.component';

const routes: Routes = [
  {
    path:'react1',
    component:React1Component,
    loadChildren: () => import('./react1/react1.module').then(m => m.React1Module)
  },
  {
    path:'react2',
    component:React2Component,
    loadChildren: () => import('./react2/react2.module').then(m => m.React2Module)
  },
  {
    path:'out1',
    component:InOut1Component,
    loadChildren: () => import('./out1/out1.module').then(m => m.Out1Module)
  },
  {
    path:'out2',
    component:InOut2Component,
    loadChildren: () => import('./out2/out2.module').then(m => m.Out2Module)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
