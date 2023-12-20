import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WalddyComponent } from './walddy/walddy.component';
import { RaulComponent } from './raul/raul.component';
import { AlvaroComponent } from './alvaro/alvaro.component';

@NgModule({
  declarations: [
    AppComponent,
    WalddyComponent,
    RaulComponent,
    AlvaroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
