import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuChatComponent } from './menu-chat/menu-chat.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ChatComponent } from './chat/chat.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTableModule} from '@angular/material/table';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { AdminComponent } from './admin/admin.component';
import { AdminChatComponent } from './admin-chat/admin-chat.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { ChatPrivadoComponent } from './chat-privado/chat-privado.component';
import { ChatEComponent } from './chat-e/chat-e.component';
import { ChatPComponent } from './chat-p/chat-p.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuChatComponent,
    ChatComponent,
    LoginComponent,
    RegistroComponent,
    AdminComponent,
    AdminChatComponent,
    AdminUsersComponent,
    ChatPrivadoComponent,
    ChatEComponent,
    ChatPComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
