import { Component } from '@angular/core';
import { Figura } from './figura';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrl: './beer-list.component.scss'
})
export class BeerListComponent {

  figuras: Figura [] = [{
    "nombre" : "2B",
    "tamanio" : 17,
    "precio" : 25000,
    "stock" : 0,
    "img" : "assets/img/2B.jpg",
    "promo" : true,
  },
  {
    "nombre" : "Akuma",
    "tamanio" : 22,
    "precio" : 35000,
    "stock" : 2,
    "img" : "assets/img/2B.jpg",
    "promo" : false,
  }
]

  constructor(){

  }

  ngOnInit(): void{
  }
}
