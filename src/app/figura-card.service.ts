import { Injectable } from '@angular/core';
import { Figura } from './figura-list/figura';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FiguraCardService {
  constructor() { }
  private _listaCarrito: Figura[] = [];
  listaCarrito: BehaviorSubject<Figura[]> = new BehaviorSubject(this._listaCarrito);
  agregarCarro(figura: Figura) {
    let item = this._listaCarrito.find((v1) => v1.nombre == figura.nombre);
    if (!item) {
      this._listaCarrito.push({ ...figura });
    //  this.getCantCompras();
    }
    else {
      item.cantidadPedido += figura.cantidadPedido;
    //  this.getCantCompras();
    }
    console.log(this._listaCarrito.length);
    this.listaCarrito.next(this._listaCarrito); // equivalente al evento emitt
  }

  getCantCompras() {
    return this._listaCarrito.length;
  }
  getCompras(): Figura[] {
    return this._listaCarrito;
  }
}