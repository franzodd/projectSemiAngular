import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Figura } from './figura';
import { FiguraDataService } from '../Services/figura-data.service';

@Component({
  selector: 'app-figura-catalogo',
  templateUrl: './figura-catalogo.component.html',
  styleUrl: './figura-catalogo.component.scss'
})
export class FiguraCatalogoComponent {
  figuras: Figura[] = [];
  
  constructor(
    private figuraDataService: FiguraDataService
  ) { }
  @Input()
  figuraForm: Figura; 
  @Output()
  figuraFormChange: EventEmitter<Figura> = new EventEmitter<Figura>();
  
  ngOnInit(): void {
    this.figuraDataService.getAllFigCatalogo().subscribe(figuras => this.figuras = figuras);
  }
  agregarAlForm(figura: Figura) {
    let auxFigura:Figura =  {
      "id": 1,
      "nombre": "",
      "tamanio": 0,
      "precio": 0,
      "img": "",
      "pintado": false,
      "promo": false,
    };
    auxFigura.nombre = figura.nombre;
    auxFigura.tamanio = figura.tamanio;
    auxFigura.precio = figura.precio;
    auxFigura.img = figura.img;
    auxFigura.pintado = figura.pintado;
    auxFigura.promo = figura.promo;
    this.figuraFormChange.emit(auxFigura);
  }
}
