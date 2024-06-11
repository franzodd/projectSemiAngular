import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FiguraListComponent } from './figura-list/figura-list.component';
import { FormsModule } from '@angular/forms';
import { FigurasAbautComponent } from './figuras-abaut/figuras-abaut.component';
import { ProyectoFigurasFigurasComponent } from './proyecto-figuras-figuras/proyecto-figuras-figuras.component';
import { CarritoComponent } from './carrito/carrito.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';

@NgModule({
  declarations: [
    AppComponent,
    FiguraListComponent,
    FigurasAbautComponent,
    ProyectoFigurasFigurasComponent,
    CarritoComponent,
    InputIntegerComponent
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
