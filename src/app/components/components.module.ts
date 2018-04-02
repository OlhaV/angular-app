import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonComponent} from "./button/button.component";
import {MenuComponent} from "./menu/menu.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ButtonComponent,
    MenuComponent
  ],
  exports: [
    ButtonComponent,
    MenuComponent
  ]
})
export class ComponentsModule {
}
