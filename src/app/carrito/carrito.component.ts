import { Component } from '@angular/core';
import { FiguraCardService } from '../figura-card.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.scss'
})
export class CarritoComponent {
  constructor(private carrito: FiguraCardService) { }

  ngOnInit(): void {
  }

}
