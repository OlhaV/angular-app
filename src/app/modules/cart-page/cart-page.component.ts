import {Component, OnInit} from '@angular/core';
import {Pizza} from "../../models/pizza.model";
import {DataService} from "../data.service";

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.less']
})
export class CartPageComponent implements OnInit {

  _chosenPizzas: Pizza[] = [];
  _cartNotEmpty: boolean = false;
  _totalSum: number = 0;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this._chosenPizzas = this.dataService.getChosenPizzas();
    this._chosenPizzas.length ? this._cartNotEmpty = true : this._cartNotEmpty = false;
    this._getTotalSum();
  }

  _getTotalSum() {
    this._totalSum = 0;
    this._chosenPizzas.map((pizza) => {
      this._totalSum += pizza.price * pizza.amount;
    });
    return this._totalSum;
  }


}
