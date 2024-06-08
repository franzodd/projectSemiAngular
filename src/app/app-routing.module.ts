import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FigurasAbautComponent } from './figuras-abaut/figuras-abaut.component';
import { ProyectoFigurasFigurasComponent } from './proyecto-figuras-figuras/proyecto-figuras-figuras.component';

const routes: Routes = [
  {path: '',
    redirectTo:'figuras',
    pathMatch:'full'
  },
  {path: 'figuras',
    component:ProyectoFigurasFigurasComponent
  },
  {path: 'abaut',
    component:FigurasAbautComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
