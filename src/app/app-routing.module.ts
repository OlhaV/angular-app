import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HistoryPageComponent} from "./modules/history-page/history-page.component";
import {MainPageComponent} from "./modules/main-page/main-page.component";
import {CartPageComponent} from "./modules/cart-page/cart-page.component";


const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'history', component: HistoryPageComponent },
  { path: 'cart', component: CartPageComponent }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
