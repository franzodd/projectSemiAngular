import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Figura } from '../figura-list/figura';

const URL = "https://urlDeLaApi"; //Cuando tenga

@Injectable({
  providedIn: 'root'
})
export class FiguraDataService {
  _figuras: Figura[] = [{
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
    "img": "assets/img/Akuma.jpeg",
    "promo": false,
    "cantidadPedido": 0,
  },
  {
    "nombre": "Baki",
    "tamanio": 15,
    "precio": 18000,
    "stock": 5,
    "img": "assets/img/Baki.jpg",
    "promo": false,
    "cantidadPedido": 8,
  },
  {
    "nombre": "Coraline",
    "tamanio": 20,
    "precio": 28000,
    "stock": 7,
    "img": "assets/img/Coraline.jpg",
    "promo": false,
    "cantidadPedido": 0,
  }];
  figuras: BehaviorSubject<Figura[]> = new BehaviorSubject(this._figuras)

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Figura[]> {
    //fetch('url', {method: 'GET'})
    /* let figuraCompra = this.http.get<Figura[]>(URL).pipe(
       tap((figuras: Figura[]) => figuras.forEach(figura => figura.cantidadPedido = 0))
     );*/
    //Retornaria figuraCompra si tuviese una api
    for (let index = 0; index < this._figuras.length; index++) {
      this._figuras[index].cantidadPedido = 0;
    }
    this.figuras.next(this._figuras);
    return this.figuras;
  }

  public setStock(figura: Figura, cant: number) {
    for (let index = 0; index < this._figuras.length; index++) {
      if (this._figuras[index] == figura)
        this._figuras[index].stock = cant;
    }
  }
}
