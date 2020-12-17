import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import { MainComponent } from './main/main.component';
import { LogoutComponent } from './logout/logout.component';
import { MenuComponent } from './menu/menu.component';
import { ProductsholderComponent } from './components/product/productsholder/productsholder.component';
import { ProductsComponent } from './components/product/products/products.component';
import { ProductComponent } from './components/product/product/product.component';
import {HttpInterceptorService} from "./http-interceptor.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    LogoutComponent,
    MenuComponent,
    ProductsholderComponent,
    ProductsComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
