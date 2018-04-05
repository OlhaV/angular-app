import {Injectable} from '@angular/core';
import {Pizza} from "../models/pizza.model";
import {LocalStorageService, ILocalStorageServiceConfig } from "angular-2-local-storage";

@Injectable()
export class DataService {

  _chosenPizzas: Pizza[] = [];
  _pizzas: Pizza[] = [
    {name: 'margarita', ingredients: ['basil', 'tomato', 'mozzarella'], price: 5.75, image: './../../assets/images/margarita.png'},
    {name: 'peperoni', ingredients: ['peperoni', 'tomato', 'mozzarella', 'parmejano'], price: 7.00, image: './../../assets/images/peperoni.png'},
    {name: 'meat', ingredients: ['bacon', 'tomato', 'mozzarella', 'ham', 'salami'], price: 12.00, image: './../../assets/images/meat.png'},
    {name: 'marina', ingredients: ['shrimp', 'parmejano', 'tuna', 'galric'], price: 15.75, image: './../../assets/images/marina.png'}
  ];

  constructor(private localStorageService: LocalStorageService,) {

  }

  getPizzas(): Pizza[] {
     return this._pizzas;
  }

  getChosenPizzas(): Pizza[] {
    let pizzas = this.localStorageService.get('chosenPizzas');
    for (let key in pizzas) {
      this._chosenPizzas.push(pizzas[key]);
    }

    return this._chosenPizzas;
  }

  addToChosenPizzas(i: number) {
    if (this._chosenPizzas.indexOf(this._pizzas[i]) === -1) {
      this._chosenPizzas.push(this._pizzas[i]);
      this.localStorageService.set('chosenPizzas', this._chosenPizzas);
    }
  }

  removeFromChosenPizzas(i: number) {
    this._chosenPizzas.splice(this._chosenPizzas.indexOf(this._pizzas[i]), 1);
  }

}
