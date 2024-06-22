import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FiguraCatalogoComponent } from './figura-catalogo/figura-catalogo.component';
import { FormsModule } from '@angular/forms';
import { FigurasDestacadasComponent } from './figuras-destacadas/figuras-destacadas.component';
import { ProyectoFigurasFigurasComponent } from './proyecto-figuras-figuras/proyecto-figuras-figuras.component';
import { CarritoComponent } from './carrito/carrito.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { FiguraContactoComponent } from './figura-contacto/figura-contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    FiguraCatalogoComponent,
    FigurasDestacadasComponent,
    ProyectoFigurasFigurasComponent,
    CarritoComponent,
    InputIntegerComponent,
    HomeComponent,
    FiguraContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
