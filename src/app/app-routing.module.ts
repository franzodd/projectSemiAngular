import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FigurasDestacadasComponent } from './figuras-destacadas/figuras-destacadas.component';
import { ProyectoFigurasFigurasComponent } from './proyecto-figuras-figuras/proyecto-figuras-figuras.component';
import { HomeComponent } from './home/home.component';
import { FiguraContactoComponent } from './figura-contacto/figura-contacto.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'compras',
    component: ProyectoFigurasFigurasComponent
  },
  {
    path: 'abaut',
    component: FigurasDestacadasComponent
  }, {
    path: 'contacto',
    component: FiguraContactoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
