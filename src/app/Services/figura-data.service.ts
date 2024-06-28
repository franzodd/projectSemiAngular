import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Figura } from '../figura-catalogo/figura';
import { FiguraDestacada } from '../figura-catalogo/figuraDestacada';

const URL = "https://urlDeLaApi"; //Cuando tenga

@Injectable({
  providedIn: 'root'
})
export class FiguraDataService {
  _figurasDestacadas: FiguraDestacada[] = [{
    "id": 5,
    "nombre": "Pain",
    "tamanio": 25,
    "precio": 85000,
    "img": "assets/img/pain.jpg",
    "pintado": true,
    "promo": true,
    "materiales": "Resina, pieda, PAL",
    "descripcion": " Esta pieza coleccionable captura la esencia del icónico Pain, meticulosamente pintada a mano con atención al detalle. Cada rasgo del líder de Akatsuki se representa con precisión, desde sus penetrantes ojos Rinnegan hasta su distintiva vestimenta. Una adición imprescindible para cualquier fanático de Naruto que aprecie el arte y la artesanía en miniatura.",
  },
  {
    "id": 6,
    "nombre": "Pain",
    "tamanio": 27,
    "precio": 95000,
    "img": "assets/img/Jujutsu0.jpg",
    "pintado": true,
    "promo": false,
    "materiales": "Resina, PAL",
    "descripcion": "Esta estatuilla detallada presenta al protagonista con el imponente espectro de Rika a su espalda, capturando un momento icónico de la serie. La figura resalta la conexión única entre los personajes con una paleta de colores vibrantes y un diseño dinámico. Cada elemento, desde la expresión intensa del héroe hasta la presencia etérea de Rika, está finamente esculpido y pintado a mano, ofreciendo una obra maestra en miniatura para los seguidores de Jujutsu Kaisen.",
  },
  {
    "id": 7,
    "nombre": "Kaneda en Akira",
    "tamanio": 30,
    "precio": 105000,
    "img": "assets/img/akira.jpg",
    "pintado": true,
    "promo": false,
    "materiales": "Resina, PAL, cemento, madera",
    "descripcion": "Revive la emoción de “Akira” con esta figura de Kaneda, fielmente recreada, montando su legendaria motocicleta roja. La dinámica pose de Kaneda y los detalles meticulosos de la moto, desde los neumáticos hasta los paneles futuristas, son un tributo al clásico del anime. Pintada a mano y diseñada con precisión, esta figura es una pieza central espectacular que captura el espíritu rebelde y la acción trepidante de la película.",
  }
  ];
  _figuras: Figura[] = [{
    "id": 1,
    "nombre": "2B",
    "tamanio": 15,
    "precio": 25000,
    "img": "assets/img/2B.jpg",
    "pintado": false,
    "promo": true,
  },
  {
    "id": 2,
    "nombre": "Akuma",
    "tamanio": 20,
    "precio": 30000,
    "img": "assets/img/Akuma.jpeg",
    "pintado": false,
    "promo": false,
  },
  {
    "id": 3,
    "nombre": "Baki",
    "tamanio": 15,
    "precio": 25000,
    "img": "assets/img/Baki.jpg",
    "pintado": false,
    "promo": false,
  },
  {
    "id": 4,
    "nombre": "Coraline",
    "tamanio": 25,
    "precio": 33000,
    "img": "assets/img/Coraline.jpg",
    "pintado": false,
    "promo": false,
  }];
  figuras: BehaviorSubject<Figura[]> = new BehaviorSubject(this._figuras)
  figurasDestacadas: BehaviorSubject<FiguraDestacada[]> = new BehaviorSubject(this._figurasDestacadas)
  constructor(private http: HttpClient) { }

  public getAll(): Observable<Figura[]> {
    //fetch('url', {method: 'GET'})
    /* let figuraCompra = this.http.get<Figura[]>(URL).pipe(
       tap((figuras: Figura[]) => figuras.forEach(figura => figura.cantidadPedido = 0))
     );*/
    //Retornaria figuraCompra si tuviese una api

    let _figurasAll: Figura[] = [];

    for (let index = 0; index < this._figuras.length; index++) {
      _figurasAll.push(this._figuras[index]);
    }
    for (let index = 0; index < this._figurasDestacadas.length; index++) {
      _figurasAll.push(this._figurasDestacadas[index]);
    }
    let figurasAll: BehaviorSubject<Figura[]> = new BehaviorSubject<Figura[]>(_figurasAll);

    figurasAll.next(_figurasAll);
    return figurasAll;
  }

  public getAllFigCatalogo(): Observable<Figura[]> {
    //fetch('url', {method: 'GET'})
    /* let figuraCatalogo = this.http.get<Figura[]>(URL).pipe(
       tap((figuras: Figura[]) => figuras.forEach(figura => figura.cantidadPedido = 0))
     );*/
    //Retornaria figuraCatalogo si tuviese una api

    this.figuras.next(this._figuras);
    return this.figuras;
  }

  public getAllFigDestacadas(): Observable<FiguraDestacada[]> {
    //fetch('url', {method: 'GET'})
    /* let figuraDestacadas = this.http.get<Figura[]>(URL).pipe(
       tap((figuras: FiguraDestacadas[]) => figuras.forEach(figura => figura.cantidadPedido = 0))
     );*/
    //Retornaria figuraDestacadas si tuviese una api

    this.figurasDestacadas.next(this._figurasDestacadas);
    return this.figurasDestacadas;
  }

}
