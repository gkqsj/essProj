import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagInicialComponent } from './pag-inicial/pag-inicial.component';
import { FbLookalikeComponent } from './fb-lookalike/fb-lookalike.component';
import { PerfilComponent } from './perfil/perfil.component';
import { GraphicsComponent } from './graphics/graphics.component';
import { CheckinComponent } from './checkin/checkin.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RoomMapsComponent } from './room-maps/room-maps.component';

@NgModule({
  declarations: [
    AppComponent,
    PagInicialComponent,
    FbLookalikeComponent,
    PerfilComponent,
    GraphicsComponent,
    CheckinComponent,
    CheckoutComponent,
    RoomMapsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
