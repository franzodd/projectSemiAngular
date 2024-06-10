import { Component,EventEmitter,Input, OnInit, Output, output } from '@angular/core';
import { Figura } from '../beer-list/figura';

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

  ngOnInit(): void {
  }
  incrementarCant(): void {
    if (this.cantidadPedido < this.max){
      this.cantidadPedido++;
      this.cantidadPedidoChange.emit(this.cantidadPedido);
    }
  }
  decrementarCant(): void {
    if (this.cantidadPedido > 0){
      this.cantidadPedido--;
      this.cantidadPedidoChange.emit(this.cantidadPedido);
    }
  }
}
