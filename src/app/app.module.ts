import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MainPageComponent} from "./modules/main-page/main-page.component";
import {CartPageComponent} from "./modules/cart-page/cart-page.component";
import {HistoryPageComponent} from "./modules/history-page/history-page.component";
import {AppRoutingModule} from './app-routing.module';
import {ComponentsModule} from './components/components.module';


@NgModule({
  declarations: [
    AppComponent,
    CartPageComponent,
    HistoryPageComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
