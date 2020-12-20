import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/authentication/login/login.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import { MainComponent } from './components/main/main.component';
import { LogoutComponent } from './components/authentication/logout/logout.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProductsholderComponent } from './components/product/productsholder/productsholder.component';
import { ProductsComponent } from './components/product/products/products.component';
import { ProductComponent } from './components/product/product/product.component';
import {HttpInterceptorService} from "./http-interceptor.service";
import {ModifyComponent} from "./components/product/modify/modify.component";
import { ModifyItemComponent } from './components/product/modify-item/modify-item.component';
import { AddProductComponent } from './components/product/add-product/add-product.component';
import { AddComponent } from './components/product/add/add.component';
import {CartComponent} from "./components/cart/cart/cart.component";
import {CartholderComponent} from "./components/cart/cartholder/cartholder.component";
import {CartItemComponent} from "./components/cart/cart-item/cart-item.component";
import {RegisterComponent} from "./components/authentication/register/register.component";
import {ThankyouComponent} from "./components/thankyou/thankyou.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    LogoutComponent,
    MenuComponent,
    ProductsholderComponent,
    ProductsComponent,
    ProductComponent,
    ModifyComponent,
    ModifyItemComponent,
    AddProductComponent,
    AddComponent,
    CartComponent,
    CartholderComponent,
    CartItemComponent,
    RegisterComponent,
    ThankyouComponent
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
