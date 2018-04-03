import {Component, OnInit} from '@angular/core';
import {Pizza} from "../../models/pizza.model";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.less']
})
export class MainPageComponent implements OnInit {

  _indredients: string = "";
  _pizza: string = "";
  _pizzaPrice: number = 0;

  _defaultPizzas = [
    {name: 'margarita', ingredients: ['basil', 'tomato', 'mozzarella'], price: 5.75, image: './../../assets/images/margarita.png'},
    {name: 'peperoni', ingredients: ['peperoni', 'tomato', 'mozzarella', 'parmejano'], price: 7.00, image: './../../assets/images/peperoni.png'},
    {name: 'meat', ingredients: ['bacon', 'tomato', 'mozzarella', 'ham', 'salami'], price: 12.00, image: './../../assets/images/meat.png'},
    {name: 'marina', ingredients: ['shrimp', 'parmejano', 'tuna', 'galric'], price: 15.75, image: './../../assets/images/marina.png'}
  ];


  constructor() {
  }

  ngOnInit() {
  }

  _getIngredients(i: number): string {
    this._indredients = "";
    this._defaultPizzas[i].ingredients.map((ingredient, index) => {
      this._indredients += ingredient;
      if (index + 1 !== this._defaultPizzas[i].ingredients.length) {
        this._indredients += ", ";
      }
    });
    return this._indredients;
  }

  _buttonClickHandler(e) {
    console.log(e);
  }
}
