import { Component, EventEmitter, Output } from '@angular/core';
import { FiguraCardService } from '../Services/figura-card.service';
import { Figura } from '../figura-catalogo/figura';
import { Observable } from 'rxjs';
import { FiguraCatalogoComponent } from '../figura-catalogo/figura-catalogo.component';
import { FiguraDataService } from '../Services/figura-data.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.scss'
})
export class CarritoComponent {

  cantCompras: number = 0;
  //listCompras : Figura[] = [];
  listaCompras$: Observable<Figura[]>;
  constructor(
    private carrito: FiguraCardService,
    private figuraDataService: FiguraDataService
  ) {
    /* carrito.listaCarrito.subscribe((observable)=> this.listCompras = observable);//Observo la variable de lista carrito*/
    carrito.listaCarrito.subscribe((observable) => this.cantCompras = observable.length);
    this.listaCompras$ = carrito.listaCarrito.asObservable();
  }
  ngOnInit(): void {
  }

  borrarFiguraDelCarro(figura: Figura) {
    this.carrito.sacarCarro(figura);
  }
}
