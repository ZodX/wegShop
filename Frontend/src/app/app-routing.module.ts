import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./components/authentication/login/login.component";
import {MainComponent} from "./components/main/main.component";
import {ProductsComponent} from "./components/product/products/products.component";
import {ModifyComponent} from "./components/product/modify/modify.component";
import {AddComponent} from "./components/product/add/add.component";
import {CartComponent} from "./components/cart/cart/cart.component";

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'main', component: MainComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'add', component: AddComponent },
  { path: 'modify/:id', component: ModifyComponent },
  { path: 'cart', component: CartComponent},
  { path: '**', redirectTo: 'main' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

