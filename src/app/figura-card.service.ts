import { Injectable } from '@angular/core';
import { Figura } from './figura-list/figura';

@Injectable({
  providedIn: 'root'
})
export class FiguraCardService {

  constructor() { }
  listaCarrito: Figura[] = [];
  agregarCarro(figura: Figura) {
    let item = this.listaCarrito.find((v1) => v1.nombre == figura.nombre);
    if (!item)
      this.listaCarrito.push({... figura});
    else
      item.cantidadPedido += figura.cantidadPedido;
    console.log(this.listaCarrito.length);
  }

}