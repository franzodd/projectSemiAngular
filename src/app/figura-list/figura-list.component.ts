import { Component } from '@angular/core';
import { Figura } from './figura';
import { FiguraCardService } from '../figura-card.service';

@Component({
  selector: 'app-figura-list',
  templateUrl: './figura-list.component.html',
  styleUrl: './figura-list.component.scss'
})
export class FiguraListComponent {

  figuras: Figura[] = [{
    "nombre": "2B",
    "tamanio": 17,
    "precio": 25000,
    "stock": 10,
    "img": "assets/img/2B.jpg",
    "promo": true,
    "cantidadPedido": 0,
  },
  {
    "nombre": "Akuma",
    "tamanio": 22,
    "precio": 35000,
    "stock": 2,
    "img": "assets/img/2B.jpg",
    "promo": false,
    "cantidadPedido": 0,
  }
  ]

  constructor(private carrito: FiguraCardService) { }

  ngOnInit(): void {
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
