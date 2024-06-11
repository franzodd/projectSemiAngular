import { Component } from '@angular/core';
import { FiguraCardService } from '../figura-card.service';
import { Figura } from '../figura-list/figura';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.scss'
})
export class CarritoComponent {
  cantCompras : Number = 0;
  //listCompras : Figura[] = [];
  listaCompras$: Observable<Figura[]>;
  constructor(private carrito: FiguraCardService) { 
   /* carrito.listaCarrito.subscribe((observable)=> this.listCompras = observable);//Observo la variable de lista carrito*/
    carrito.listaCarrito.subscribe((observable)=> this.cantCompras = observable.length);
    this.listaCompras$ = carrito.listaCarrito.asObservable();
  }

  ngOnInit(): void {
  }

}
