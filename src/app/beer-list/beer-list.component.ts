import { Component } from '@angular/core';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrl: './beer-list.component.scss'
})
export class BeerListComponent {
  figuras = {};
  figura = {
    "nombre" : "2B",
    "tamanio" : 17+"cm",
    "precio" : "$"+25000,
    "stock" : 0,
    "img" : "assets/img/2B.jpg"
  }

  constructor(){

  }

  ngOnInit(): void{
  }
}
