import { Component } from '@angular/core';
import { Figura } from '../figura-catalogo/figura';
import { FiguraDataService } from '../Services/figura-data.service';
import { FiguraCardService } from '../Services/figura-card.service';
import { FiguraDestacada } from '../figura-catalogo/figuraDestacada';

@Component({
  selector: 'app-figuras-destacadas',
  templateUrl: './figuras-destacadas.component.html',
  styleUrl: './figuras-destacadas.component.scss'
})
export class FigurasDestacadasComponent {
  figuras: FiguraDestacada[] = [];
  constructor(
    private carrito: FiguraCardService,
    private figuraDataService: FiguraDataService
  ) { }

  ngOnInit(): void {
    this.figuraDataService.getAllFigDestacadas().subscribe(figuras => this.figuras = figuras);
  }
  agregarFiguraAlCarrito(figura: Figura) {
    this.carrito.agregarCarro(figura);
    figura.stock -= figura.cantidadPedido;
    figura.cantidadPedido = 0;
  }
}
