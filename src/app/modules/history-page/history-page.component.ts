import { Component, OnInit } from '@angular/core';
import {OrderList} from "../../models/orderList";

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.less']
})
export class HistoryPageComponent implements OnInit {

  _orderList: OrderList;

  constructor() { }

  ngOnInit() {
  }

  _getDate(): string {
     return "";
  }

  _getItems(): string {
    return "";
  }

}
