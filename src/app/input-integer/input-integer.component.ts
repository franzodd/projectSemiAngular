import { Component,EventEmitter,Input, OnInit, Output, output } from '@angular/core';
import { Figura } from '../figura-catalogo/figura';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})
export class InputIntegerComponent implements OnInit{
  constructor(){}
  @Input()
  max: number;  
  @Input()
  cantidadPedido: number;  
  @Output()
  cantidadPedidoChange: EventEmitter<number> = new EventEmitter<number>();
  @Output()
  maxReached: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }
  incrementarCant(): void {
    if (this.cantidadPedido < this.max){
      this.cantidadPedido++;
      this.cantidadPedidoChange.emit(this.cantidadPedido);
    }
    else{
      this.maxReached.emit("Se llego al maximo de stock");
    }
  }
  decrementarCant(): void {
    if (this.cantidadPedido > 0){
      this.cantidadPedido--;
      this.cantidadPedidoChange.emit(this.cantidadPedido);
    }
  }
}
