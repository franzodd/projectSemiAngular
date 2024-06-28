import { Component, input } from '@angular/core';
import { Figura } from '../figura-catalogo/figura';

@Component({
  selector: 'app-proyecto-figuras-figuras',
  templateUrl: './proyecto-figuras-figuras.component.html',
  styleUrl: './proyecto-figuras-figuras.component.scss'
})
export class ProyectoFigurasFigurasComponent {

  constructor() { }
  figuraForm: Figura;
  ngOnInit(): void {
  }
}
