import {Component, Input, EventEmitter, Output} from '@angular/core';
import {Pizza} from "../../models/pizza.model";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.less"]
})
export class CardComponent {

  @Input() card: Pizza;
  @Input() ingredients: string;
  @Input() index: number;

  @Output() buttonClickHandler = new EventEmitter<void>();

}
