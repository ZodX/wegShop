import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./components/authentication/login/login.component";
import {MainComponent} from "./components/main/main.component";
import {ProductsComponent} from "./components/product/products/products.component";
import {ModifyComponent} from "./components/product/modify/modify.component";

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'main', component: MainComponent },
  { path: 'products', component: ProductsComponent},
  { path: 'modify/:id', component: ModifyComponent},
  { path: '**', redirectTo: "main" },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
