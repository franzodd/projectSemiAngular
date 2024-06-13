import { Component } from '@angular/core';
import { FiguraCardService } from '../Services/figura-card.service';
import { Figura } from '../figura-list/figura';
import { Observable } from 'rxjs';
import { FiguraListComponent } from '../figura-list/figura-list.component';
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
    this.figuraDataService.setStock(figura, figura.cantidadPedido);
    figura.cantidadPedido = 0;
  }
}
