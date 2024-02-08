import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnviadosComponent } from './enviados/enviados.component';
import { EnviarMailComponent } from './enviar-mail/enviar-mail.component';
import { RecibirMailComponent } from './recibir-mail/recibir-mail.component';
import { RecibirNoLeidoMailComponent } from './recibir-no-leido-mail/recibir-no-leido-mail.component';

const routes: Routes = [
  {
    path: 'enviar',
    component: EnviarMailComponent
  },
  {
    path: 'recibir',
    component: RecibirMailComponent
  },
  {
    path: 'recibirNoLeido',
    component: RecibirNoLeidoMailComponent
  },
  {
    path: 'enviados',
    component: EnviadosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
