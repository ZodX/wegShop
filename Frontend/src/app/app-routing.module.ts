import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {MainComponent} from "./main/main.component";
import {ProductsComponent} from "./components/product/products/products.component";

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'main', component: MainComponent },
  { path: 'products', component: ProductsComponent},
  { path: '**', redirectTo: "main" },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
