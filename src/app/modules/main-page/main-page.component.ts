import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Pizza} from "../../models/pizza.model";
import {DataService} from "../data.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.less']
})
export class MainPageComponent implements OnInit {

  @Output() updateCart = new EventEmitter<Pizza[]>();

  _pizzas: Pizza[] = [];
  _indredients: string = "";
  _pizza: string = "";
  _pizzaPrice: number = 0;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this._pizzas = this.dataService.getPizzas();
  }

  _getIngredients(i: number): string {
    this._indredients = "";
    this._pizzas[i].ingredients.map((ingredient, index) => {
      this._indredients += ingredient;
      if (index + 1 !== this._pizzas[i].ingredients.length) {
        this._indredients += ", ";
      }
    });
    return this._indredients;
  }

  _addToCart(i: number): void {
    this.dataService.addToChosenPizzas(i);
  }
}
