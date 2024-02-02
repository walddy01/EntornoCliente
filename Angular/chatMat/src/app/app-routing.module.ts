import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ChatPrivadoComponent } from './chat-privado/chat-privado.component';
import { ChatComponent } from './chat/chat.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {
    path: 'chat',
    component:ChatComponent
  },
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'registro',
    component:RegistroComponent
  },
  {
    path: 'admin',
    component:AdminComponent
  },
  {
    path: 'privado',
    component:ChatPrivadoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
