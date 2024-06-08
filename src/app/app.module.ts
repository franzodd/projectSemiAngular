import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeerListComponent } from './beer-list/beer-list.component';

import { FormsModule } from '@angular/forms';
import { FigurasAbautComponent } from './figuras-abaut/figuras-abaut.component';
import { ProyectoFigurasFigurasComponent } from './proyecto-figuras-figuras/proyecto-figuras-figuras.component';
import { CarritoComponent } from './carrito/carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent,
    FigurasAbautComponent,
    ProyectoFigurasFigurasComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
