import { Component } from '@angular/core';
import { Figura } from './figura';
import { FiguraCardService } from '../Services/figura-card.service';
import { FiguraDataService } from '../Services/figura-data.service';

@Component({
  selector: 'app-figura-list',
  templateUrl: './figura-list.component.html',
  styleUrl: './figura-list.component.scss'
})
export class FiguraListComponent {
   figuras: Figura[] = [];
  
  constructor(
    private carrito: FiguraCardService,
    private figuraDataService: FiguraDataService
  ) { }



  ngOnInit(): void {
    this.figuraDataService.getAll().subscribe(figuras => this.figuras = figuras);
  }

  agregarFiguraAlCarrito(figura: Figura) {
    this.carrito.agregarCarro(figura);
    figura.stock -= figura.cantidadPedido;
    figura.cantidadPedido = 0;
  }
  maxReached(m: string) {
    alert(m);
  }
}
