import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { FiguraCardService } from '../Services/figura-card.service';
import { Figura } from '../figura-catalogo/figura';

@Component({
  selector: 'app-figura-form-pedido',
  templateUrl: './figura-form-pedido.component.html',
  styleUrl: './figura-form-pedido.component.scss'
})
export class FiguraFormPedidoComponent {

  constructor(
    private carrito: FiguraCardService,
  ) { }
  @Input()
  figura: Figura;
  ngOnInit(): void {
  }
  modificarPrecio(tamanio: string) {
    let inputColor: HTMLInputElement | null = document.getElementById("inputColor") as HTMLInputElement;
    if (inputColor && inputColor.checked) {
      if (tamanio == "chico") {
        this.figura.precio = 50000;
        this.figura.tamanio = 15;
      }
      else if (tamanio == "mediano") {
        this.figura.precio = 60000;
        this.figura.tamanio = 20;
      }
      else if (tamanio == "grande") {
        this.figura.precio = 66000;
        this.figura.tamanio = 25;
      }
    }
    else {
      if (tamanio == "chico") {
        this.figura.precio = 25000;
        this.figura.tamanio = 15;
      }
      else if (tamanio == "mediano") {
        this.figura.precio = 30000;
        this.figura.tamanio = 20;
      }
      else if (tamanio == "grande") {
        this.figura.precio = 33000;
        this.figura.tamanio = 25;
      }
    }
  }

  modificarPrecioPintado() {
    let inputColor: HTMLInputElement | null = document.getElementById("inputColor") as HTMLInputElement;

    if (inputColor && inputColor.checked) {
      this.figura.precio = this.figura.precio * 2;
      this.figura.pintado = true;
    }
    else {
      this.figura.precio = this.figura.precio / 2;
      this.figura.pintado = false;
    }
  }
  agregarFiguraAlCarrito(figura: Figura) {
    if (this.figura) {
      this.carrito.agregarCarro(figura);
      figura.nombre = " ";
    }
  }
}
