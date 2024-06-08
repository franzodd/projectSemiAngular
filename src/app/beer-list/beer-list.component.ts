import { Component } from '@angular/core';
import { Figura } from './figura';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrl: './beer-list.component.scss'
})
export class BeerListComponent {

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

  constructor() {

  }

  ngOnInit(): void {
  }
  incrementarCant(figura: Figura): void {
    if (figura.cantidadPedido < figura.stock)
    figura.cantidadPedido++;
  }
  decrementarCant(figura: Figura): void {
    if (figura.cantidadPedido > 0)
      figura.cantidadPedido--;
  }
}
