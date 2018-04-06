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

  constructor(private localStorageService: LocalStorageService) {

  }

  _setInitialAmountofPizzas() {
    this._pizzas.forEach( pizza => {
      pizza.amount = 1;
    })
  }

  getPizzas(): Pizza[] {
    // this._setInitialAmountofPizzas();
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
    let index = this._chosenPizzas.indexOf(this._pizzas[i]);
    if (index === -1) {
      this._pizzas[i]['amount'] = 1;
      this._chosenPizzas.push(this._pizzas[i]);
    } else {
      this._chosenPizzas[index]['amount'] += 1;

      let savedPizzas = this.localStorageService.get('chosenPizzas');
      let savedPizzasArray = [];
      if (savedPizzas) {
        for (let pizza in savedPizzas) {
          if (savedPizzas.hasOwnProperty(pizza)) {
            savedPizzasArray.push(savedPizzas[pizza]);
          }
        }



        // this._chosenPizzas.forEach((pizza) => {
        //     if (pizza.name === savedPizzas[key].name) {
        //       pizza.amount += 1;
        //     } else {
        //       this._chosenPizzas.push(savedPizzas[key]);
        //     }
        //
        // });
      }
    }

    console.log(this._chosenPizzas);

    this.localStorageService.set('chosenPizzas', this._chosenPizzas);

  }

  removeFromChosenPizzas(i: number) {
    this._chosenPizzas.splice(this._chosenPizzas.indexOf(this._pizzas[i]), 1);
  }

}
