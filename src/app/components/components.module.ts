import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonComponent} from "./button/button.component";
import {MenuComponent} from "./menu/menu.component";
import {CardComponent} from "./card/card.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ButtonComponent,
    CardComponent,
    MenuComponent
  ],
  exports: [
    ButtonComponent,
    CardComponent,
    MenuComponent
  ]
})
export class ComponentsModule {
}
