import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MainPageComponent} from "./modules/main-page/main-page.component";
import {CartPageComponent} from "./modules/cart-page/cart-page.component";
import {HistoryPageComponent} from "./modules/history-page/history-page.component";
import {AppRoutingModule} from './app-routing.module';
import {ComponentsModule} from './components/components.module';
import {DataService} from "./modules/data.service";
import {AsyncLocalStorageModule} from "angular-async-local-storage";
import {LocalStorageModule} from "angular-2-local-storage";


@NgModule({
  declarations: [
    AppComponent,
    CartPageComponent,
    HistoryPageComponent,
    MainPageComponent
  ],
  imports: [
    AppRoutingModule,
    AsyncLocalStorageModule,
    BrowserModule,
    ComponentsModule,
    LocalStorageModule.withConfig({
      prefix: "app",
      storageType: 'localStorage'
    })
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
