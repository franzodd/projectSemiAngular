import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Figura } from '../figura-list/figura';

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
    }
    else {
      item.cantidadPedido += figura.cantidadPedido;
    }
    console.log(this._listaCarrito.length);
    this.listaCarrito.next(this._listaCarrito); // equivalente al evento emitt
  }
  sacarCarro(figura: Figura) {
    let pos = 0;
    for (let index = 0; index < this._listaCarrito.length; index++) {
      if (figura.nombre == this._listaCarrito[index].nombre)
        pos = index;
    }
    this._listaCarrito.splice(pos, 1);
    console.log(this._listaCarrito.length);
    this.listaCarrito.next(this._listaCarrito); // equivalente al evento emitt
  }
}