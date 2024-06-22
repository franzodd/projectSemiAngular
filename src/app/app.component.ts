import { Component } from '@angular/core';
import { FiguraCardService } from './Services/figura-card.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Semninario Angular';
  cantCarrito: number = 0;
  constructor(
    private carrito: FiguraCardService,
  ) {
    /* carrito.listaCarrito.subscribe((observable)=> this.listCompras = observable);//Observo la variable de lista carrito*/
    carrito.listaCarrito.subscribe((observable) => this.cantCarrito = observable.length);
  }
  ngOnInit(): void {
    let btnCarrito = document.getElementById('btncarrito');
    btnCarrito?.addEventListener('click', aparecerCarro);
  }

}
function aparecerCarro() {
  let appCarrito = document.getElementById('appCarrito');

  appCarrito?.classList.toggle("desaparecer");
}

